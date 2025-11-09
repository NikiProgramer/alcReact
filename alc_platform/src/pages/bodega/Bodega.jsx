import { Link } from 'react-router-dom'

export default function Bodega() {
    return (
        <div style={{ padding: 20 }}>
            <h2>Bodega</h2>
            <p>Gestión de inventario y bodegas.</p>
            <p><Link to="..">Volver</Link></p>
        </div>
    )
}
