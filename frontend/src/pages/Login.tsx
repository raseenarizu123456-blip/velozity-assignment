import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!name) { alert('Peru sollu da Raseena! 😅'); return; }
    localStorage.setItem('velozity_user', name)
    alert(`Welcome ${name} da! 🔥`)
    navigate('/dashboard')
  }

  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ background: 'white', padding: '40px', borderRadius: '15px', width: '320px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.2)' }}>
        <h2 style={{ color: 'black', marginBottom: '20px' }}>Velozity Login 🚀</h2>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Un peru enna da?"
          style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '15px', boxSizing: 'border-box' }}
        />
        <button onClick={handleLogin} style={{ width: '100%', background: '#ff0055', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
          Login pannu da!
        </button>
      </div>
    </div>
  )
}