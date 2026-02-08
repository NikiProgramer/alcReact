import { Link } from 'react-router-dom'

export default function Personal() {
    return (
        <div style={{ padding: 20 }}>
            <h2>Personal</h2>
            <p>Sección de gestión de personal. Aquí irían las acciones y datos de empleados.</p>
            <p><Link to="..">Volver</Link></p>
        </div>
    )
}
