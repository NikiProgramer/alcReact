export default function IngresarMercancia() {
    return (
        <div style={{ padding: 20 }}>
            <h3>Ingresar Mercancía</h3>

            <div className="card" style={{ marginTop: 20, backgroundColor: '#fff', maxWidth: 600 }}>
                <form style={{ display: 'grid', gap: 16 }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: 8 }}>
                            Producto
                            <select style={{
                                width: '100%',
                                padding: '8px 12px',
                                border: '1px solid #ddd',
                                borderRadius: 4,
                                marginTop: 4
                            }}>
                                <option>Zapatillas Deportivas</option>
                                <option>Zapatos Casuales</option>
                                <option>Sandalias</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: 8 }}>
                            Cantidad
                            <input
                                type="number"
                                style={{
                                    width: '100%',
                                    padding: '8px 12px',
                                    border: '1px solid #ddd',
                                    borderRadius: 4,
                                    marginTop: 4
                                }}
                            />
                        </label>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: 8 }}>
                            Proveedor
                            <input
                                type="text"
                                style={{
                                    width: '100%',
                                    padding: '8px 12px',
                                    border: '1px solid #ddd',
                                    borderRadius: 4,
                                    marginTop: 4
                                }}
                            />
                        </label>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: 8 }}>
                            Fecha de Ingreso
                            <input
                                type="date"
                                style={{
                                    width: '100%',
                                    padding: '8px 12px',
                                    border: '1px solid #ddd',
                                    borderRadius: 4,
                                    marginTop: 4
                                }}
                            />
                        </label>
                    </div>

                    <button
                        style={{
                            backgroundColor: 'var(--accent)',
                            color: '#fff',
                            padding: '12px',
                            border: 'none',
                            borderRadius: 4,
                            cursor: 'pointer',
                            marginTop: 8
                        }}
                    >
                        Registrar Ingreso
                    </button>
                </form>
            </div>
        </div>
    )
}