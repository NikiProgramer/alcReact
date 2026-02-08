import { Link, useLocation } from 'react-router-dom'
import './BreadCrumbs.css'
import { useUser } from '../context/UserContext'

export default function BreadCrumbs() {
    const { pathname } = useLocation()
    const { user } = useUser()
    const parts = pathname.split('/').filter(Boolean)

    // If route is like /home/:role/..., we want to show Inicio / <Role> / Module
    // Remove the root 'home' segment from display
    const displayParts = parts[0] === 'home' ? parts.slice(1) : parts

    // Build breadcrumb items (path accumulative)
    const crumbs = displayParts.map((part, idx) => {
        const baseParts = parts[0] === 'home' ? ['home', ...displayParts.slice(0, idx + 1)] : displayParts.slice(0, idx + 1)
        const path = '/' + baseParts.join('/')
        // prettify: map well-known module names
        const mapping = { personal: 'Personal', bodega: 'Bodega', ventas: 'Ventas' }
        const roleNames = { empleado: 'Empleado', jefe: 'Jefe', administrativo: 'Administrativo', directivo: 'Directivo' }
        const label = mapping[part] || roleNames[part] || (part.charAt(0).toUpperCase() + part.slice(1))
        return { path, label }
    })

    return (
        <nav className="bc-root" aria-label="breadcrumb">
            <ol className="bc-list">
                <li className="bc-item"><Link to="/" className="bc-link">Inicio</Link></li>
                {crumbs.map((c, i) => (
                    <li key={c.path} className={`bc-item ${i === crumbs.length - 1 ? 'current' : ''}`}>
                        {i < crumbs.length - 1 ? (
                            <Link to={c.path} className="bc-link">{c.label}</Link>
                        ) : (
                            <span className="bc-current">{c.label}</span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}
