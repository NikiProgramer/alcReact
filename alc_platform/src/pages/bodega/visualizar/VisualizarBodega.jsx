export default function VisualizarBodega() {
    const secciones = [
        { nombre: 'Zapatos Deportivos', stock: 145, capacidad: 200, ubicacion: 'A1-B3' },
        { nombre: 'Zapatos Casuales', stock: 89, capacidad: 150, ubicacion: 'B4-C2' },
        { nombre: 'Sandalias', stock: 67, capacidad: 100, ubicacion: 'C3-D1' }
    ]

    return (
        <div style={{ padding: 20 }}>
            <h3>Visualizar Bodega</h3>

            <div style={{ display: 'grid', gap: 20, marginTop: 20 }}>
                {secciones.map(seccion => (
                    <div key={seccion.nombre} className="card" style={{ backgroundColor: '#fff' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h4>{seccion.nombre}</h4>
                            <div style={{ color: '#666' }}>Ubicación: {seccion.ubicacion}</div>
                        </div>

                        <div style={{ marginTop: 12 }}>
                            <div style={{ height: 24, backgroundColor: '#eee', borderRadius: 12, overflow: 'hidden' }}>
                                <div
                                    style={{
                                        width: `${(seccion.stock / seccion.capacidad) * 100}%`,
                                        height: '100%',
                                        backgroundColor: seccion.stock < seccion.capacidad * 0.2 ? '#ff4444' : '#44aa44',
                                        transition: 'width 0.3s ease'
                                    }}
                                />
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                marginTop: 8,
                                fontSize: 14,
                                color: '#666'
                            }}>
                                <span>Stock: {seccion.stock}</span>
                                <span>Capacidad: {seccion.capacidad}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}