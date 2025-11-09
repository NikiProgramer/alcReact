export default function Tiendas() {
    const tiendas = [
        {
            id: 'T001',
            nombre: 'ALC Centro',
            direccion: 'Av. Principal 123',
            gerente: 'Juan Pérez',
            empleados: 12,
            estado: 'Activa'
        },
        {
            id: 'T002',
            nombre: 'ALC San José',
            direccion: 'Calle San José 456',
            gerente: 'Maria García',
            empleados: 8,
            estado: 'Nueva Apertura'
        }
    ]

    return (
        <div style={{ padding: 20 }}>
            <h3>Tiendas</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginTop: 20 }}>
                {tiendas.map(tienda => (
                    <div key={tienda.id} className="card" style={{ backgroundColor: '#fff' }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: 16
                        }}>
                            <h4>{tienda.nombre}</h4>
                            <span style={{
                                backgroundColor: tienda.estado === 'Activa' ? '#e6ffe6' : '#fff3e6',
                                color: tienda.estado === 'Activa' ? '#006600' : '#cc6600',
                                padding: '4px 8px',
                                borderRadius: 12,
                                fontSize: 14
                            }}>
                                {tienda.estado}
                            </span>
                        </div>

                        <div style={{ color: '#666', marginBottom: 4 }}>
                            ID: {tienda.id}
                        </div>
                        <div style={{ color: '#666', marginBottom: 4 }}>
                            Dirección: {tienda.direccion}
                        </div>
                        <div style={{ color: '#666', marginBottom: 4 }}>
                            Gerente: {tienda.gerente}
                        </div>
                        <div style={{ color: '#666', marginBottom: 16 }}>
                            Empleados: {tienda.empleados}
                        </div>

                        <div style={{ display: 'flex', gap: 8 }}>
                            <button style={{
                                flex: 1,
                                padding: '8px',
                                border: '1px solid var(--accent)',
                                color: 'var(--accent)',
                                backgroundColor: 'transparent',
                                borderRadius: 4,
                                cursor: 'pointer'
                            }}>
                                Ver Detalles
                            </button>
                            <button style={{
                                flex: 1,
                                padding: '8px',
                                backgroundColor: 'var(--accent)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 4,
                                cursor: 'pointer'
                            }}>
                                Editar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}