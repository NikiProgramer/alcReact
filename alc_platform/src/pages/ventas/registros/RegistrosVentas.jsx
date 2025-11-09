export default function RegistrosVentas() {
    const ventas = [
        {
            id: 'V001',
            fecha: '2025-10-30',
            cliente: 'Maria González',
            productos: 2,
            total: 129.98,
            vendedor: 'Juan Pérez'
        },
        {
            id: 'V002',
            fecha: '2025-10-30',
            cliente: 'Carlos Ruiz',
            productos: 1,
            total: 59.99,
            vendedor: 'Ana López'
        }
    ]

    return (
        <div style={{ padding: 20 }}>
            <h3>Registros de Ventas</h3>

            <div className="card" style={{ marginTop: 20, backgroundColor: '#fff' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 20,
                    marginBottom: 20
                }}>
                    <div>
                        <input
                            type="text"
                            placeholder="Buscar por ID o Cliente..."
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid #ddd',
                                borderRadius: 4
                            }}
                        />
                    </div>
                    <div>
                        <input
                            type="date"
                            style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid #ddd',
                                borderRadius: 4
                            }}
                        />
                    </div>
                    <div>
                        <select style={{
                            width: '100%',
                            padding: '8px 12px',
                            border: '1px solid #ddd',
                            borderRadius: 4
                        }}>
                            <option>Todos los vendedores</option>
                            <option>Juan Pérez</option>
                            <option>Ana López</option>
                        </select>
                    </div>
                </div>

                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #eee' }}>
                            <th style={{ padding: 12 }}>ID</th>
                            <th style={{ padding: 12 }}>Fecha</th>
                            <th style={{ padding: 12 }}>Cliente</th>
                            <th style={{ padding: 12 }}>Productos</th>
                            <th style={{ padding: 12 }}>Total</th>
                            <th style={{ padding: 12 }}>Vendedor</th>
                            <th style={{ padding: 12 }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {ventas.map(venta => (
                            <tr key={venta.id} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: 12 }}>{venta.id}</td>
                                <td style={{ padding: 12 }}>{venta.fecha}</td>
                                <td style={{ padding: 12 }}>{venta.cliente}</td>
                                <td style={{ padding: 12 }}>{venta.productos}</td>
                                <td style={{ padding: 12 }}>${venta.total.toFixed(2)}</td>
                                <td style={{ padding: 12 }}>{venta.vendedor}</td>
                                <td style={{ padding: 12 }}>
                                    <button style={{
                                        padding: '4px 8px',
                                        border: '1px solid var(--accent)',
                                        color: 'var(--accent)',
                                        backgroundColor: 'transparent',
                                        borderRadius: 4,
                                        cursor: 'pointer'
                                    }}>
                                        Ver Detalle
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}