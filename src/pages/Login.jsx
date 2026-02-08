import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'
import { useUser } from '../context/UserContext'

export default function Login() {
    const [role, setRole] = useState('Empleado')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [store, setStore] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const { setUser } = useUser()

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')

        if (!email || !password) {
            setError('Por favor ingresa email y contraseña')
            return
        }

        setLoading(true)
        try {
            const BASE = import.meta.env.VITE_API_BASE || 'http://localhost:3000'
            const response = await fetch(`${BASE}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            })

            if (response.ok) {
                setUser({ email, role, store })
                navigate(`/home/${role.toLowerCase()}`, { replace: true })
            } else if (response.status === 401) {
                setError('Credenciales incorrectas')
            } else {
                setError('Error al conectar con la base de datos')
            }
        } catch (err) {
            setError('Error de conexión. Verifica que el servidor esté activo')
            console.error('Login error:', err)
        } finally {
            setLoading(false)
        }
    }

    function handleRoleClick(r) {
        // If already showing form and user clicks the same role, collapse; otherwise open form
        setShowForm((prev) => (prev && r === role ? false : true))
        setRole(r)
    }

    return (
        <div className={`login-bg ${showForm ? 'expanded' : 'collapsed'}`}>
            {/* creative platform title placed above the card */}
            <div className="platform-header" aria-hidden={false}>
                <h2 className="platform-title">
                    <span className="accent">A Lo Calderon</span>
                    <span className="thin"> Platform</span>
                </h2>
            </div>
            <div className={`login-card ${role.toLowerCase()} ${showForm ? 'expanded' : 'collapsed'}`}>
                <h1 className="brand">ALC Plataforma</h1>

                <div className="roles">
                    {['Empleado', 'Jefe', 'Administrativo', 'Directivo'].map((r, idx) => (
                        <button
                            key={r}
                            type="button"
                            className={`role ${r === role ? 'active' : ''}`}
                            onClick={() => handleRoleClick(r)}
                            aria-pressed={r === role}
                        >
                            {r}
                        </button>
                    ))}
                </div>

                {/* Registrarse link - visible under roles so it's available when form is collapsed */}
                <div className="register-link">
                    <Link to="/register">Registrarse</Link>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    {error && <div className="error-message" style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}

                    <label>Email:</label>
                    <input
                        placeholder="Ingresa tu email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="Email"
                        disabled={loading}
                    />

                    <label>Contraseña:</label>
                    <input
                        placeholder="Ingresa tu contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-label="Contraseña"
                        disabled={loading}
                    />

                    <label>Tienda:</label>
                    <select value={store} onChange={(e) => setStore(e.target.value)} disabled={loading}>
                        <option value="">Selecciona tu tienda</option>
                        <option value="SJL">San Juan</option>
                        <option value="CEN">Centro</option>
                        <option value="SUR">Sur</option>
                    </select>

                    <button className={`submit ${role.toLowerCase()}`} type="submit" disabled={loading}>
                        {loading ? 'Ingresando...' : `Ingresar ${role.toLowerCase()}`}
                    </button>
                </form>
            </div>
        </div>
    )
}
