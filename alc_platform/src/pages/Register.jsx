import React from 'react';
import './Register.css';

export default function Register() {
    const [formData, setFormData] = React.useState({
        cedula: '',
        nombreCompleto: '',
        cargo: '',
        tienda: '',
        telefono: '',
        email: '',
        fechaNacimiento: '',
        direccion: '',
        contactoEmergencia: '',
        telefonoEmergencia: '',
        eps: '',
        tipoSangre: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        // Aquí iría la lógica para enviar los datos
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="register-container">
            <div className="register-header">
                <h1>Registro de Empleado</h1>
                <p>Complete sus datos personales</p>
            </div>

            <form className="register-form" onSubmit={handleSubmit}>
                <div className="form-sections">
                    <section className="form-section personal-info">
                        <h2>Información Personal</h2>
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="cedula">Cédula</label>
                                <input
                                    type="text"
                                    id="cedula"
                                    name="cedula"
                                    value={formData.cedula}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="nombreCompleto">Nombre Completo</label>
                                <input
                                    type="text"
                                    id="nombreCompleto"
                                    name="nombreCompleto"
                                    value={formData.nombreCompleto}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                                <input
                                    type="date"
                                    id="fechaNacimiento"
                                    name="fechaNacimiento"
                                    value={formData.fechaNacimiento}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Correo Electrónico</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </section>

                    <section className="form-section work-info">
                        <h2>Información Laboral</h2>
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="cargo">Cargo</label>
                                <select
                                    id="cargo"
                                    name="cargo"
                                    value={formData.cargo}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Seleccione un cargo</option>
                                    <option value="empleado">Empleado</option>
                                    <option value="jefe">Jefe</option>
                                    <option value="administrativo">Administrativo</option>
                                    <option value="directivo">Directivo</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="tienda">Tienda</label>
                                <select
                                    id="tienda"
                                    name="tienda"
                                    value={formData.tienda}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Seleccione una tienda</option>
                                    <option value="centro">ALC Centro</option>
                                    <option value="norte">ALC Norte</option>
                                    <option value="sur">ALC Sur</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefono">Teléfono</label>
                                <input
                                    type="tel"
                                    id="telefono"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="direccion">Dirección</label>
                                <input
                                    type="text"
                                    id="direccion"
                                    name="direccion"
                                    value={formData.direccion}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </section>

                    <section className="form-section emergency-info">
                        <h2>Información de Emergencia</h2>
                        <div className="form-grid">
                            <div className="form-group">
                                <label htmlFor="contactoEmergencia">Contacto de Emergencia</label>
                                <input
                                    type="text"
                                    id="contactoEmergencia"
                                    name="contactoEmergencia"
                                    value={formData.contactoEmergencia}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="telefonoEmergencia">Teléfono de Emergencia</label>
                                <input
                                    type="tel"
                                    id="telefonoEmergencia"
                                    name="telefonoEmergencia"
                                    value={formData.telefonoEmergencia}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="eps">EPS</label>
                                <input
                                    type="text"
                                    id="eps"
                                    name="eps"
                                    value={formData.eps}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="tipoSangre">Tipo de Sangre</label>
                                <select
                                    id="tipoSangre"
                                    name="tipoSangre"
                                    value={formData.tipoSangre}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Seleccione</option>
                                    <option value="O+">O+</option>
                                    <option value="O-">O-</option>
                                    <option value="A+">A+</option>
                                    <option value="A-">A-</option>
                                    <option value="B+">B+</option>
                                    <option value="B-">B-</option>
                                    <option value="AB+">AB+</option>
                                    <option value="AB-">AB-</option>
                                </select>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="form-actions">
                    <button type="submit" className="submit-btn">Registrar</button>
                    <button type="button" className="cancel-btn" onClick={() => window.history.back()}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}