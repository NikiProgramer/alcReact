import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './Login.css'
import { useUser } from '../context/UserContext'

export default function Login() {
    const [role, setRole] = useState('Empleado')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [store, setStore] = useState('')
    const [showForm, setShowForm] = useState(false)
    const navigate = useNavigate()
    const { setUser } = useUser()

    function handleSubmit(e) {
        e.preventDefault()
        // Minimal demo validation; replace with real auth later
        if (!username || !password) {
            alert('Por favor ingresa usuario y contraseña')
            return
        }
        // In a real app you'd call an API and handle errors
        // Save user context and navigate to role-specific home
        setUser({ username, role, store })
        navigate(`/home/${role.toLowerCase()}`, { replace: true })
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
                    <label>Usuario:</label>
                    <input
                        placeholder="Ingresa tu usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        aria-label="Usuario"
                    />

                    <label>Contraseña:</label>
                    <input
                        placeholder="Ingresa tu contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-label="Contraseña"
                    />

                    <label>Tienda:</label>
                    <select value={store} onChange={(e) => setStore(e.target.value)}>
                        <option value="">Selecciona tu tienda</option>
                        <option value="SJL">San Juan</option>
                        <option value="CEN">Centro</option>
                        <option value="SUR">Sur</option>
                    </select>

                    <button className={`submit ${role.toLowerCase()}`} type="submit">Ingresar {role.toLowerCase()}</button>
                </form>
            </div>
        </div>
    )
}
