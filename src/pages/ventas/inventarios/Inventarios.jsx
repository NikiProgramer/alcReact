export default function Inventarios() {
    return (
        <div style={{ padding: 20 }}>
            <h3>Inventarios</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginTop: 20 }}>
                <div className="card" style={{ backgroundColor: '#fff' }}>
                    <h4>Resumen de Stock</h4>
                    <div style={{ marginTop: 12 }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '8px 0'
                        }}>
                            <span>Total de Productos:</span>
                            <strong>1,245 unidades</strong>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '8px 0'
                        }}>
                            <span>Valor del Inventario:</span>
                            <strong>$74,685.55</strong>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '8px 0'
                        }}>
                            <span>Productos Bajos en Stock:</span>
                            <strong style={{ color: '#ff4444' }}>8 items</strong>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ backgroundColor: '#fff' }}>
                    <h4>Movimientos Recientes</h4>
                    <div style={{ marginTop: 12 }}>
                        <div style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <strong>Zapatillas Deportivas</strong>
                                <span style={{ color: '#44aa44' }}>+50 unidades</span>
                            </div>
                            <div style={{ color: '#666', fontSize: 14 }}>Ingreso - 30 Oct 2025</div>
                        </div>
                        <div style={{ borderBottom: '1px solid #eee', padding: '8px 0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <strong>Sandalias Verano</strong>
                                <span style={{ color: '#ff4444' }}>-12 unidades</span>
                            </div>
                            <div style={{ color: '#666', fontSize: 14 }}>Venta - 30 Oct 2025</div>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ backgroundColor: '#fff', gridColumn: '1 / -1' }}>
                    <h4>Estado del Inventario</h4>
                    <div style={{ marginTop: 12 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #eee' }}>
                                    <th style={{ padding: 12 }}>Producto</th>
                                    <th style={{ padding: 12 }}>Stock</th>
                                    <th style={{ padding: 12 }}>Valor Unitario</th>
                                    <th style={{ padding: 12 }}>Valor Total</th>
                                    <th style={{ padding: 12 }}>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: 12 }}>Zapatillas Deportivas</td>
                                    <td style={{ padding: 12 }}>145</td>
                                    <td style={{ padding: 12 }}>$59.99</td>
                                    <td style={{ padding: 12 }}>$8,698.55</td>
                                    <td style={{ padding: 12 }}>
                                        <span style={{
                                            backgroundColor: '#e6ffe6',
                                            color: '#006600',
                                            padding: '4px 8px',
                                            borderRadius: 12,
                                            fontSize: 14
                                        }}>
                                            Óptimo
                                        </span>
                                    </td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: 12 }}>Sandalias Verano</td>
                                    <td style={{ padding: 12 }}>8</td>
                                    <td style={{ padding: 12 }}>$29.99</td>
                                    <td style={{ padding: 12 }}>$239.92</td>
                                    <td style={{ padding: 12 }}>
                                        <span style={{
                                            backgroundColor: '#ffe6e6',
                                            color: '#cc0000',
                                            padding: '4px 8px',
                                            borderRadius: 12,
                                            fontSize: 14
                                        }}>
                                            Bajo
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}