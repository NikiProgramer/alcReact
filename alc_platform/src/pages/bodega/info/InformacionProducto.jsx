export default function InformacionProducto() {
    return (
        <div style={{ padding: 20 }}>
            <h3>Información de Producto</h3>

            <div style={{ display: 'grid', gap: 20, marginTop: 20, maxWidth: 800 }}>
                <div className="card" style={{ backgroundColor: '#fff' }}>
                    <h4>Detalles del Producto</h4>
                    <div style={{ marginTop: 12, display: 'grid', gap: 8 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <strong>Código:</strong>
                            <span>ZAP-001</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <strong>Nombre:</strong>
                            <span>Zapatillas Deportivas Pro</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <strong>Categoría:</strong>
                            <span>Calzado Deportivo</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <strong>Stock Actual:</strong>
                            <span>145 unidades</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <strong>Precio:</strong>
                            <span>$59.99</span>
                        </div>
                    </div>
                </div>

                <div className="card" style={{ backgroundColor: '#fff' }}>
                    <h4>Especificaciones</h4>
                    <div style={{ marginTop: 12 }}>
                        <p>- Material: Malla sintética y goma</p>
                        <p>- Colores disponibles: Negro, Blanco, Rojo</p>
                        <p>- Tallas: 35-45</p>
                        <p>- Peso: 300g</p>
                    </div>
                </div>

                <div className="card" style={{ backgroundColor: '#fff' }}>
                    <h4>Ubicación en Bodega</h4>
                    <div style={{ marginTop: 12 }}>
                        <p>Pasillo: A1</p>
                        <p>Estante: B3</p>
                        <p>Nivel: 2</p>
                    </div>
                </div>
            </div>
        </div>
    )
}