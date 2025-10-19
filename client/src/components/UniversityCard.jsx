export default function UniversityCard({ uni }) {
  return (
    <article style={{ border: '1px solid #eee', borderRadius: 8, padding: '1rem' }}>
      <h3 style={{ margin: 0 }}>{uni.name}</h3>
      <div style={{ color: '#666', marginBottom: 8 }}>{uni.city}, {uni.country}</div>
      <div style={{ marginBottom: 8 }}>
        <strong>Eligibility:</strong> {uni.eligibility || 'Unknown'}
        {uni.requiredMarks != null && (
          <span> (Required: {uni.requiredMarks})</span>
        )}
      </div>
      {Array.isArray(uni.matchReasons) && uni.matchReasons.length > 0 && (
        <ul style={{ marginTop: 0 }}>
          {uni.matchReasons.map((r, i) => <li key={i}>{r}</li>)}
        </ul>
      )}
      <div style={{ display: 'flex', gap: 12 }}>
        {uni.websiteUrl && <a href={uni.websiteUrl} target="_blank" rel="noreferrer">Website</a>}
        {uni.applyUrl && <a href={uni.applyUrl} target="_blank" rel="noreferrer">Apply</a>}
      </div>
    </article>
  );
}
