export default function Informes() {
    const informes = [
        {
            categoria: 'Ventas',
            reportes: [
                {
                    titulo: 'Ventas por Tienda',
                    descripcion: 'Análisis detallado de ventas por sucursal',
                    periodo: 'Octubre 2025',
                    formato: 'PDF'
                },
                {
                    titulo: 'Productos Más Vendidos',
                    descripcion: 'Top 10 productos con mayor rotación',
                    periodo: 'Q3 2025',
                    formato: 'Excel'
                }
            ]
        },
        {
            categoria: 'Inventario',
            reportes: [
                {
                    titulo: 'Stock por Categoría',
                    descripcion: 'Resumen de inventario actual por tipo de producto',
                    periodo: 'Actualizado al 30/10/2025',
                    formato: 'Excel'
                }
            ]
        },
        {
            categoria: 'Financiero',
            reportes: [
                {
                    titulo: 'Balance General',
                    descripcion: 'Estado financiero consolidado de la empresa',
                    periodo: 'Q3 2025',
                    formato: 'PDF'
                },
                {
                    titulo: 'Flujo de Caja',
                    descripcion: 'Análisis de ingresos y egresos',
                    periodo: 'Septiembre 2025',
                    formato: 'PDF'
                }
            ]
        }
    ]

    return (
        <div style={{ padding: 20 }}>
            <h3>Informes</h3>

            <div style={{ display: 'grid', gap: 20, marginTop: 20 }}>
                {informes.map(seccion => (
                    <div key={seccion.categoria} className="card" style={{ backgroundColor: '#fff' }}>
                        <h4>{seccion.categoria}</h4>

                        <div style={{
                            display: 'grid',
                            gap: 12,
                            marginTop: 12
                        }}>
                            {seccion.reportes.map((informe, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        padding: 12,
                                        backgroundColor: '#f8f8f8',
                                        borderRadius: 4
                                    }}
                                >
                                    <div>
                                        <div style={{ fontWeight: 500, marginBottom: 4 }}>
                                            {informe.titulo}
                                        </div>
                                        <div style={{ fontSize: 14, color: '#666' }}>
                                            {informe.descripcion}
                                        </div>
                                        <div style={{ fontSize: 14, color: '#666', marginTop: 4 }}>
                                            Periodo: {informe.periodo}
                                        </div>
                                    </div>

                                    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                        <span style={{
                                            backgroundColor: '#e6f3ff',
                                            color: '#0066cc',
                                            padding: '4px 8px',
                                            borderRadius: 12,
                                            fontSize: 14
                                        }}>
                                            {informe.formato}
                                        </span>
                                        <button style={{
                                            padding: '8px 16px',
                                            backgroundColor: 'var(--accent)',
                                            color: '#fff',
                                            border: 'none',
                                            borderRadius: 4,
                                            cursor: 'pointer'
                                        }}>
                                            Descargar
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}