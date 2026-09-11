import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const user = localStorage.getItem('velozity_user')
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('velozity_user')
    navigate('/login')
  }

  if (!user) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h2>Login pannala da! 😅</h2>
        <button onClick={() => navigate('/login')} style={{ background: '#ff0055', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none' }}>Login ku po da</button>
      </div>
    )
  }

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Vanakkam {user} da! 🔥</h1>
      <p style={{ fontSize: '1.2rem' }}>Velozity Dashboard ku vanthita da! Ippo nee Full Stack Developer da!</p>
      <div style={{ background: '#1a1a1a', color: '#00ff88', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
        <p>🎉 Day 1: Backend ✅</p>
        <p>🎉 Day 2: Frontend ✅</p>
        <p>🎉 Day 3: Connection ✅</p>
        <p>🔥 Day 4: Routing + Login ✅</p>
      </div>
      <button onClick={handleLogout} style={{ marginTop: '20px', background: 'black', color: 'white', padding: '10px 20px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>Logout da</button>
    </div>
  )
}