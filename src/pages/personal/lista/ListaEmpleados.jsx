export default function ListaEmpleados() {
    const empleados = [
        { id: '001', nombre: 'Ana López', cargo: 'Vendedor', sucursal: 'ALC Centro' },
        { id: '002', nombre: 'Carlos Ruiz', cargo: 'Bodeguero', sucursal: 'ALC Centro' },
        { id: '003', nombre: 'María García', cargo: 'Cajero', sucursal: 'ALC Centro' }
    ]

    return (
        <div style={{ padding: 20 }}>
            <h3>Lista de Empleados</h3>

            <div style={{ marginTop: 20 }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', borderRadius: 8 }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #eee' }}>
                            <th style={{ padding: 12 }}>ID</th>
                            <th style={{ padding: 12 }}>Nombre</th>
                            <th style={{ padding: 12 }}>Cargo</th>
                            <th style={{ padding: 12 }}>Sucursal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {empleados.map(emp => (
                            <tr key={emp.id} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: 12 }}>{emp.id}</td>
                                <td style={{ padding: 12 }}>{emp.nombre}</td>
                                <td style={{ padding: 12 }}>{emp.cargo}</td>
                                <td style={{ padding: 12 }}>{emp.sucursal}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}