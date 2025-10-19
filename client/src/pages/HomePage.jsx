import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

export default function HomePage() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch('/api/testimonials')
      .then(r => r.ok ? r.json() : [])
      .then(data => {
        if (!cancelled) setTestimonials(Array.isArray(data) ? data : []);
      })
      .catch(() => { if (!cancelled) setTestimonials([]); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  return (
    <div>
      <section style={{ padding: '4rem 1rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.25rem', marginBottom: '0.5rem' }}>
          University Apply Portal
        </h1>
        <p style={{ color: '#555', marginBottom: '1rem' }}>
          Find the right university and apply with confidence.
        </p>
        <Link to="/track" style={{ display: 'inline-block', background: '#2563eb', color: 'white', padding: '0.6rem 1rem', borderRadius: 6 }}>
          Start Tracking Universities
        </Link>
      </section>

      <section style={{ padding: '2rem 1rem', maxWidth: 960, margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>What our users say</h2>
        {loading && <div>Loading testimonials…</div>}
        {!loading && (
          <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))' }}>
            {testimonials.map(t => (
              <article key={t.id || t._id} style={{ border: '1px solid #eee', borderRadius: 8, padding: '1rem' }}>
                <div style={{ color: '#f5a623', fontSize: '1.1rem' }}>
                  {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                </div>
                <p style={{ margin: '0.5rem 0' }}>&quot;{t.quote}&quot;</p>
                <div style={{ color: '#666', fontSize: '0.9rem' }}>— {t.name}</div>
              </article>
            ))}
            {testimonials.length === 0 && <div>No testimonials yet.</div>}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}
