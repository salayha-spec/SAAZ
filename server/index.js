import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';

// In-memory sample data for development. Replace with MongoDB later.
const universities = [
  {
    id: 'u1',
    name: 'Metro City University',
    country: 'USA',
    city: 'New York',
    websiteUrl: 'https://www.metrocityu.edu',
    applyUrl: 'https://www.metrocityu.edu/apply',
    majors: ['Computer Science', 'Business', 'Biology', 'Psychology'],
    minMarks: { 'Computer Science': 85, Business: 75, Biology: 78, Psychology: 70 },
  },
  {
    id: 'u2',
    name: 'Pacific Tech Institute',
    country: 'USA',
    city: 'San Francisco',
    websiteUrl: 'https://www.pacifictech.edu',
    applyUrl: 'https://apply.pacifictech.edu',
    majors: ['Computer Science', 'Data Science', 'Design'],
    minMarks: { 'Computer Science': 90, 'Data Science': 88, Design: 72 },
  },
  {
    id: 'u3',
    name: 'Northern Lakes University',
    country: 'Canada',
    city: 'Toronto',
    websiteUrl: 'https://www.nlu.ca',
    applyUrl: 'https://www.nlu.ca/apply',
    majors: ['Engineering', 'Business', 'Psychology'],
    minMarks: { Engineering: 82, Business: 74, Psychology: 68 },
  },
  {
    id: 'u4',
    name: 'European School of Engineering',
    country: 'Germany',
    city: 'Munich',
    websiteUrl: 'https://www.ese.de',
    applyUrl: 'https://www.ese.de/apply',
    majors: ['Engineering', 'Computer Science', 'Physics'],
    minMarks: { Engineering: 86, 'Computer Science': 88, Physics: 80 },
  },
  {
    id: 'u5',
    name: 'Gulf Coast University',
    country: 'UAE',
    city: 'Dubai',
    websiteUrl: 'https://www.gcu.ac.ae',
    applyUrl: 'https://apply.gcu.ac.ae',
    majors: ['Business', 'Hospitality', 'Computer Science'],
    minMarks: { Business: 70, Hospitality: 65, 'Computer Science': 78 },
  },
  {
    id: 'u6',
    name: 'Eastern Asia University',
    country: 'Japan',
    city: 'Tokyo',
    websiteUrl: 'https://www.eau.jp',
    applyUrl: 'https://www.eau.jp/en/apply',
    majors: ['Computer Science', 'Robotics', 'Design'],
    minMarks: { 'Computer Science': 87, Robotics: 92, Design: 75 },
  },
  {
    id: 'u7',
    name: 'Midlands University',
    country: 'UK',
    city: 'Birmingham',
    websiteUrl: 'https://www.midlands.ac.uk',
    applyUrl: 'https://apply.midlands.ac.uk',
    majors: ['Business', 'Biology', 'Law'],
    minMarks: { Business: 72, Biology: 76, Law: 84 },
  },
  {
    id: 'u8',
    name: 'Andes National University',
    country: 'Chile',
    city: 'Santiago',
    websiteUrl: 'https://www.andes.cl',
    applyUrl: 'https://www.andes.cl/apply',
    majors: ['Engineering', 'Data Science', 'Biology'],
    minMarks: { Engineering: 80, 'Data Science': 85, Biology: 78 },
  },
];

const testimonials = [
  { id: 't1', name: 'Aisha K.', rating: 5, quote: 'Made my application process smooth and stress-free.' },
  { id: 't2', name: 'Liam P.', rating: 4, quote: 'Great recommendations matched my marks and goals.' },
  { id: 't3', name: 'Noah S.', rating: 5, quote: 'Found nearby universities I had not considered.' },
  { id: 't4', name: 'Zoe M.', rating: 5, quote: 'Clear links and requirements in one place.' },
  { id: 't5', name: 'Isha R.', rating: 4, quote: 'Helpful interface, fast to use.' },
];

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.get('/api/testimonials', (_req, res) => {
  res.json(testimonials.slice(0, 12));
});

app.get('/api/majors', (_req, res) => {
  const set = new Set();
  for (const u of universities) {
    for (const m of u.majors) set.add(m);
  }
  res.json([...set].sort());
});

app.get('/api/universities', (req, res) => {
  const q = String(req.query.search || '').trim().toLowerCase();
  const major = String(req.query.major || '').trim();
  const location = String(req.query.location || '').trim().toLowerCase();
  const marks = Number(req.query.marks || '');

  let results = universities.map(u => ({ ...u }));

  if (q) {
    results = results.filter(u => u.name.toLowerCase().includes(q));
  }

  if (major) {
    results = results.filter(u => u.majors.includes(major));
  }

  if (location) {
    results = results.filter(u =>
      u.city.toLowerCase().includes(location) ||
      u.country.toLowerCase().includes(location)
    );
  }

  // Scoring and eligibility
  results = results.map(u => {
    const reasons = [];
    let eligibility = 'Unknown';
    let required = undefined;

    if (major && u.minMarks[major] != null) {
      required = u.minMarks[major];
    } else if (!major) {
      required = Math.min(...Object.values(u.minMarks));
    }

    if (!Number.isNaN(marks) && required != null) {
      const diff = Math.round(marks - required);
      if (diff >= 5) {
        eligibility = 'Strong Match';
        reasons.push(`Your marks are ${diff} above requirement`);
      } else if (diff >= 0) {
        eligibility = 'Match';
        reasons.push('You meet the minimum requirement');
      } else {
        eligibility = 'Reach';
        reasons.push(`You are ${Math.abs(diff)} below requirement`);
      }
    }

    return { ...u, eligibility, requiredMarks: required, matchReasons: reasons };
  });

  // Sort by eligibility, then name
  const rank = { 'Strong Match': 0, 'Match': 1, 'Reach': 2, 'Unknown': 3 };
  results.sort((a, b) => {
    const er = (rank[a.eligibility] ?? 9) - (rank[b.eligibility] ?? 9);
    if (er !== 0) return er;
    return a.name.localeCompare(b.name);
  });

  res.json(results.slice(0, 30));
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
