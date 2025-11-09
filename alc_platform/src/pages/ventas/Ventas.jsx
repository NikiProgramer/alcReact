import { Link } from 'react-router-dom'

export default function Ventas() {
    return (
        <div style={{ padding: 20 }}>
            <h2>Ventas</h2>
            <p>Panel de ventas y reportes.</p>
            <p><Link to="..">Volver</Link></p>
        </div>
    )
}
