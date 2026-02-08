import { Link } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
            <div style={{ textAlign: 'center' }}>
                <h2>Bienvenido a ALC</h2>
                <p>Has ingresado correctamente (demo).</p>
                <Link to="/">Salir / Volver al login</Link>
            </div>
        </div>
    )
}
