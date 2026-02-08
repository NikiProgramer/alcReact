export default function HorarioPersonal() {
    const horario = [
        { dia: 'Lunes', entrada: '08:00', salida: '17:00' },
        { dia: 'Martes', entrada: '08:00', salida: '17:00' },
        { dia: 'Miércoles', entrada: '08:00', salida: '17:00' },
        { dia: 'Jueves', entrada: '08:00', salida: '17:00' },
        { dia: 'Viernes', entrada: '08:00', salida: '16:00' }
    ]

    return (
        <div style={{ padding: 20 }}>
            <h3>Horario</h3>

            <div className="card" style={{ marginTop: 20, backgroundColor: '#fff' }}>
                <h4 style={{ marginBottom: 16 }}>Horario Semanal</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr style={{ borderBottom: '2px solid #eee' }}>
                            <th style={{ padding: 12 }}>Día</th>
                            <th style={{ padding: 12 }}>Entrada</th>
                            <th style={{ padding: 12 }}>Salida</th>
                        </tr>
                    </thead>
                    <tbody>
                        {horario.map(h => (
                            <tr key={h.dia} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: 12 }}>{h.dia}</td>
                                <td style={{ padding: 12 }}>{h.entrada}</td>
                                <td style={{ padding: 12 }}>{h.salida}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="card" style={{ marginTop: 20, backgroundColor: '#fff' }}>
                <h4>Resumen de Horas</h4>
                <div>Horas semanales: 44</div>
                <div>Días laborables: Lunes a Viernes</div>
                <div>Descanso: 1 hora (13:00 - 14:00)</div>
            </div>
        </div>
    )
}