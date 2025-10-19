import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import TrackPage from './pages/TrackPage.jsx'
import Navbar from './components/Navbar.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/track" element={<TrackPage />} />
        <Route path="*" element={
          <div style={{ padding: '1rem' }}>
            <h2>Page not found</h2>
            <Link to="/">Go Home</Link>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
