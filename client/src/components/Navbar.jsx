import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: 16, padding: '0.75rem 1rem', borderBottom: '1px solid #eee', alignItems: 'center' }}>
      <div style={{ fontWeight: 700 }}>University Apply Portal</div>
      <div style={{ marginLeft: 'auto', display: 'flex', gap: 12 }}>
        <Link to="/">Home</Link>
        <Link to="/track">Track Universities</Link>
      </div>
    </nav>
  );
}
