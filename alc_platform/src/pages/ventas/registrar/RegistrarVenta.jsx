export default function RegistrarVenta() {
    return (
        <div style={{ padding: 20 }}>
            <h3>Registrar Venta</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 20, marginTop: 20 }}>
                <div className="card" style={{ backgroundColor: '#fff' }}>
                    <h4>Productos</h4>
                    <div style={{ marginTop: 12 }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'auto 100px 100px', gap: 12, marginBottom: 12 }}>
                            <input
                                placeholder="Buscar producto..."
                                style={{
                                    padding: '8px 12px',
                                    border: '1px solid #ddd',
                                    borderRadius: 4
                                }}
                            />
                            <select style={{
                                padding: '8px 12px',
                                border: '1px solid #ddd',
                                borderRadius: 4
                            }}>
                                <option>Talla</option>
                                <option>35</option>
                                <option>36</option>
                                <option>37</option>
                            </select>
                            <button style={{
                                backgroundColor: 'var(--accent)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: 4,
                                cursor: 'pointer'
                            }}>
                                Agregar
                            </button>
                        </div>

                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid #eee' }}>
                                    <th style={{ padding: 12 }}>Producto</th>
                                    <th style={{ padding: 12 }}>Talla</th>
                                    <th style={{ padding: 12 }}>Precio</th>
                                    <th style={{ padding: 12 }}>Cant.</th>
                                    <th style={{ padding: 12 }}>Total</th>
                                    <th style={{ padding: 12 }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: 12 }}>Zapatillas Deportivas</td>
                                    <td style={{ padding: 12 }}>42</td>
                                    <td style={{ padding: 12 }}>$59.99</td>
                                    <td style={{ padding: 12 }}>1</td>
                                    <td style={{ padding: 12 }}>$59.99</td>
                                    <td style={{ padding: 12 }}>
                                        <button style={{
                                            padding: '4px 8px',
                                            border: '1px solid #ff4444',
                                            color: '#ff4444',
                                            backgroundColor: 'transparent',
                                            borderRadius: 4,
                                            cursor: 'pointer'
                                        }}>
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="card" style={{ backgroundColor: '#fff', height: 'fit-content' }}>
                    <h4>Resumen</h4>
                    <div style={{ marginTop: 12 }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '12px 0',
                            borderBottom: '1px solid #eee'
                        }}>
                            <span>Subtotal</span>
                            <strong>$59.99</strong>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '12px 0',
                            borderBottom: '1px solid #eee'
                        }}>
                            <span>IVA (19%)</span>
                            <strong>$11.40</strong>
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '12px 0',
                            marginTop: 12
                        }}>
                            <span>Total</span>
                            <strong style={{ fontSize: 20 }}>$71.39</strong>
                        </div>

                        <button style={{
                            width: '100%',
                            backgroundColor: 'var(--accent)',
                            color: '#fff',
                            padding: '12px',
                            border: 'none',
                            borderRadius: 4,
                            cursor: 'pointer',
                            marginTop: 20
                        }}>
                            Finalizar Venta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}