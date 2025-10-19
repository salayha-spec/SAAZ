import { useEffect, useMemo, useState } from 'react';
import UniversityCard from '../components/UniversityCard.jsx';

function useDebouncedValue(value, delayMs) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delayMs);
    return () => clearTimeout(t);
  }, [value, delayMs]);
  return debounced;
}

export default function TrackPage() {
  const [search, setSearch] = useState('');
  const [marks, setMarks] = useState('');
  const [major, setMajor] = useState('');
  const [location, setLocation] = useState('');

  const [majors, setMajors] = useState([]);
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(false);

  const dSearch = useDebouncedValue(search, 300);
  const dMarks = useDebouncedValue(marks, 300);
  const dMajor = useDebouncedValue(major, 300);
  const dLocation = useDebouncedValue(location, 300);

  useEffect(() => {
    fetch('/api/majors')
      .then(r => r.ok ? r.json() : [])
      .then(data => setMajors(Array.isArray(data) ? data : []))
      .catch(() => setMajors([]));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams();
    if (dSearch) params.set('search', dSearch);
    if (dMajor) params.set('major', dMajor);
    if (dLocation) params.set('location', dLocation);
    if (dMarks) params.set('marks', dMarks);

    setLoading(true);
    fetch('/api/universities?' + params.toString())
      .then(r => r.ok ? r.json() : [])
      .then(data => setUniversities(Array.isArray(data) ? data : []))
      .catch(() => setUniversities([]))
      .finally(() => setLoading(false));
  }, [dSearch, dMarks, dMajor, dLocation]);

  const majorOptions = useMemo(() => [
    { value: '', label: 'Any major' },
    ...majors.map(m => ({ value: m, label: m }))
  ], [majors]);

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Find universities that fit you</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <label style={{ fontWeight: 600 }}>University Search</label>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name" style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: 6 }} />
        </div>
        <div>
          <label style={{ fontWeight: 600 }}>Marks</label>
          <input type="number" min="0" max="100" value={marks} onChange={e => setMarks(e.target.value)} placeholder="e.g. 85" style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: 6 }} />
        </div>
        <div>
          <label style={{ fontWeight: 600 }}>Major</label>
          <select value={major} onChange={e => setMajor(e.target.value)} style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: 6 }}>
            {majorOptions.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ fontWeight: 600 }}>Location</label>
          <input value={location} onChange={e => setLocation(e.target.value)} placeholder="City or Country" style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: 6 }} />
        </div>
      </div>

      {loading && <div>Loading results…</div>}

      {!loading && (
        <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))' }}>
          {universities.map(u => (
            <UniversityCard key={u.id || u._id} uni={u} />
          ))}
          {universities.length === 0 && <div>No results. Adjust your inputs.</div>}
        </div>
      )}
    </div>
  );
}
