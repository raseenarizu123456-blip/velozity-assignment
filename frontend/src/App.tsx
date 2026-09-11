import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', background: 'black', color: 'white' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.5rem' }}>VELOZITY 🔥</Link>
        <div style={{ display: 'flex', gap: '15px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link>
          <Link to="/dashboard" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App