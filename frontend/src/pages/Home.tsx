import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {
  const [backendMsg, setBackendMsg] = useState('Connecting to backend... ⌛')

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(res => {
        setBackendMsg((res.data.message || res.data.msg || JSON.stringify(res.data)) + ' 🔥')
      })
      .catch(() => {
        setBackendMsg('Backend off da Raseena! Start pannu da! 😅')
      })
  }, [])

  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '20px', padding: '20px' }}>
      <h1 style={{ fontSize: '4rem', margin: '0' }}>VELOZITY 🚀</h1>
      <p style={{ background: '#1a1a1a', color: '#00ff88', padding: '15px 30px', borderRadius: '10px' }}>{backendMsg}</p>
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link to="/login" style={{ background: '#ff0055', color: 'white', padding: '12px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Login pannu da 🔥</Link>
        <Link to="/dashboard" style={{ background: 'white', color: 'black', padding: '12px 25px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>Dashboard</Link>
      </div>
    </div>
  )
}