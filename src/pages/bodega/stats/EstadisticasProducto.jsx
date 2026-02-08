export default function EstadisticasProducto() {
    return (
        <div style={{ padding: 20 }}>
            <h3>Estadísticas por Producto</h3>

            <div style={{ display: 'grid', gap: 20, marginTop: 20 }}>
                <div className="card" style={{ backgroundColor: '#fff' }}>
                    <h4>Rotación de Inventario</h4>
                    <div style={{ marginTop: 12 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #eee' }}>
                                    <th style={{ padding: 12 }}>Producto</th>
                                    <th style={{ padding: 12 }}>Entradas</th>
                                    <th style={{ padding: 12 }}>Salidas</th>
                                    <th style={{ padding: 12 }}>Stock Actual</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: 12 }}>Zapatillas Deportivas</td>
                                    <td style={{ padding: 12 }}>200</td>
                                    <td style={{ padding: 12 }}>55</td>
                                    <td style={{ padding: 12 }}>145</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: 12 }}>Zapatos Casuales</td>
                                    <td style={{ padding: 12 }}>150</td>
                                    <td style={{ padding: 12 }}>61</td>
                                    <td style={{ padding: 12 }}>89</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
                    <div className="card" style={{ backgroundColor: '#fff' }}>
                        <h4>Demanda Mensual</h4>
                        <div style={{ marginTop: 12 }}>
                            <div style={{ height: 200, backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                [Gráfico de Barras]
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{ backgroundColor: '#fff' }}>
                        <h4>Predicción de Stock</h4>
                        <div style={{ marginTop: 12 }}>
                            <div style={{ height: 200, backgroundColor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                [Gráfico de Líneas]
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}