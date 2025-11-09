export default function Contabilidad() {
    return (
        <div style={{ padding: 20 }}>
            <h3>Contabilidad</h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginTop: 20 }}>
                <div className="card" style={{ backgroundColor: '#fff' }}>
                    <h4>Resumen Financiero</h4>
                    <div style={{ marginTop: 12 }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '8px 0',
                            borderBottom: '1px solid #eee'
                        }}>
                            <span>Ingresos (Oct 2025)</span>
                            <strong style={{ color: '#44aa44' }}>$125,450.00</strong>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '8px 0',
                            borderBottom: '1px solid #eee'
                        }}>
                            <span>Gastos (Oct 2025)</span>
                            <strong style={{ color: '#ff4444' }}>$89,320.00</strong>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '8px 0'
                        }}>
                            <span>Balance</span>
                            <strong>$36,130.00</strong>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ backgroundColor: '#fff' }}>
                    <h4>Acciones Rápidas</h4>
                    <div style={{
                        display: 'grid',
                        gap: 8,
                        marginTop: 12
                    }}>
                        <button style={{
                            padding: '10px',
                            backgroundColor: 'var(--accent)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: 4,
                            cursor: 'pointer',
                            textAlign: 'left'
                        }}>
                            Registrar Transacción
                        </button>
                        <button style={{
                            padding: '10px',
                            border: '1px solid var(--accent)',
                            color: 'var(--accent)',
                            backgroundColor: 'transparent',
                            borderRadius: 4,
                            cursor: 'pointer',
                            textAlign: 'left'
                        }}>
                            Ver Libro Mayor
                        </button>
                        <button style={{
                            padding: '10px',
                            border: '1px solid var(--accent)',
                            color: 'var(--accent)',
                            backgroundColor: 'transparent',
                            borderRadius: 4,
                            cursor: 'pointer',
                            textAlign: 'left'
                        }}>
                            Generar Balance
                        </button>
                    </div>
                </div>

                <div className="card" style={{ backgroundColor: '#fff', gridColumn: '1 / -1' }}>
                    <h4>Últimas Transacciones</h4>
                    <div style={{ marginTop: 12 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #eee' }}>
                                    <th style={{ padding: 12 }}>Fecha</th>
                                    <th style={{ padding: 12 }}>Concepto</th>
                                    <th style={{ padding: 12 }}>Tipo</th>
                                    <th style={{ padding: 12 }}>Monto</th>
                                    <th style={{ padding: 12 }}>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: 12 }}>30/10/2025</td>
                                    <td style={{ padding: 12 }}>Venta Tienda Centro</td>
                                    <td style={{ padding: 12 }}>Ingreso</td>
                                    <td style={{ padding: 12 }}>
                                        <span style={{ color: '#44aa44' }}>+$2,450.00</span>
                                    </td>
                                    <td style={{ padding: 12 }}>
                                        <span style={{
                                            backgroundColor: '#e6ffe6',
                                            color: '#006600',
                                            padding: '4px 8px',
                                            borderRadius: 12,
                                            fontSize: 14
                                        }}>
                                            Registrado
                                        </span>
                                    </td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: 12 }}>30/10/2025</td>
                                    <td style={{ padding: 12 }}>Pago Proveedor</td>
                                    <td style={{ padding: 12 }}>Gasto</td>
                                    <td style={{ padding: 12 }}>
                                        <span style={{ color: '#ff4444' }}>-$1,850.00</span>
                                    </td>
                                    <td style={{ padding: 12 }}>
                                        <span style={{
                                            backgroundColor: '#fff3e6',
                                            color: '#cc6600',
                                            padding: '4px 8px',
                                            borderRadius: 12,
                                            fontSize: 14
                                        }}>
                                            Pendiente
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