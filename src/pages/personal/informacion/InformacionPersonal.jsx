export default function InformacionPersonal() {
    return (
        <div style={{ padding: 20 }}>
            <h3>Información Personal</h3>
            <div className="card" style={{ marginTop: 20, textAlign: 'left' }}>
                <div style={{ marginBottom: 16 }}>
                    <h4>Datos Personales</h4>
                    <div>Juan Pérez</div>
                    <div>ID: 12345</div>
                    <div>Email: juan.perez@alc.com</div>
                </div>

                <div style={{ marginBottom: 16 }}>
                    <h4>Información Laboral</h4>
                    <div>Cargo: Jefe de Tienda</div>
                    <div>Sucursal: ALC Centro</div>
                    <div>Fecha de ingreso: 01/01/2024</div>
                </div>

                <div>
                    <h4>Contacto de Emergencia</h4>
                    <div>María Pérez</div>
                    <div>Relación: Esposa</div>
                    <div>Tel: (123) 456-7890</div>
                </div>
            </div>
        </div>
    )
}