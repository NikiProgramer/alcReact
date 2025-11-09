export default function Proveedores() {
    const proveedores = [
        {
            id: 'P001',
            nombre: 'Calzados Premium S.A.',
            contacto: 'Roberto Gómez',
            telefono: '(123) 456-7890',
            email: 'contacto@calzadospremium.com',
            productos: ['Zapatillas Deportivas', 'Zapatos Casuales'],
            estado: 'Activo'
        },
        {
            id: 'P002',
            nombre: 'Importadora de Calzado',
            contacto: 'Ana Martínez',
            telefono: '(123) 555-0123',
            email: 'ana@importcalzado.com',
            productos: ['Sandalias', 'Botas'],
            estado: 'En Revisión'
        }
    ]

    return (
        <div style={{ padding: 20 }}>
            <h3>Proveedores</h3>

            <div style={{ display: 'grid', gap: 20, marginTop: 20 }}>
                <div className="card" style={{ backgroundColor: '#fff' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                        <input
                            type="text"
                            placeholder="Buscar proveedor..."
                            style={{
                                padding: '8px 12px',
                                border: '1px solid #ddd',
                                borderRadius: 4,
                                width: 300
                            }}
                        />
                        <button style={{
                            backgroundColor: 'var(--accent)',
                            color: '#fff',
                            padding: '8px 16px',
                            border: 'none',
                            borderRadius: 4,
                            cursor: 'pointer'
                        }}>
                            Nuevo Proveedor
                        </button>
                    </div>

                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '2px solid #eee' }}>
                                <th style={{ padding: 12 }}>ID</th>
                                <th style={{ padding: 12 }}>Nombre</th>
                                <th style={{ padding: 12 }}>Contacto</th>
                                <th style={{ padding: 12 }}>Teléfono</th>
                                <th style={{ padding: 12 }}>Email</th>
                                <th style={{ padding: 12 }}>Estado</th>
                                <th style={{ padding: 12 }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {proveedores.map(prov => (
                                <tr key={prov.id} style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: 12 }}>{prov.id}</td>
                                    <td style={{ padding: 12 }}>{prov.nombre}</td>
                                    <td style={{ padding: 12 }}>{prov.contacto}</td>
                                    <td style={{ padding: 12 }}>{prov.telefono}</td>
                                    <td style={{ padding: 12 }}>{prov.email}</td>
                                    <td style={{ padding: 12 }}>
                                        <span style={{
                                            backgroundColor: prov.estado === 'Activo' ? '#e6ffe6' : '#fff3e6',
                                            color: prov.estado === 'Activo' ? '#006600' : '#cc6600',
                                            padding: '4px 8px',
                                            borderRadius: 12,
                                            fontSize: 14
                                        }}>
                                            {prov.estado}
                                        </span>
                                    </td>
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
        </div>
    )
}