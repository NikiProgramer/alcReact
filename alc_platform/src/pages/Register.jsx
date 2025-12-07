import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

export default function Register() {
    const [formData, setFormData] = React.useState({
        cedula: '',
        nombreCompleto: '',
        cargo: '',
        tienda: '',
        telefono: '',
        email: '',
        password: '',
        fechaNacimiento: '',
        direccion: '',
        contactoEmergencia: '',
        telefonoEmergencia: '',
        eps: '',
        tipoSangre: ''
    });
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');
    const [success, setSuccess] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!formData.email || !formData.password) {
            setError('Email y contraseña son requeridos');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const text = await response.text();

            if (response.ok) {
                setSuccess('¡Usuario registrado con éxito! Redirigiendo al login...');
                console.log('Registro exitoso:', formData);
                setTimeout(() => {
                    navigate('/', { replace: true });
                }, 2000);
            } else if (text.includes('ya registrado')) {
                setError('Este email ya está registrado');
            } else {
                setError('Error al registrar. Por favor intenta de nuevo');
            }
        } catch (err) {
            setError('Error de conexión. Verifica que el servidor esté activo');
            console.error('Register error:', err);
        } finally {
            setLoading(false);
        }
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

            {error && <div className="alert alert-error" style={{ color: 'red', marginBottom: '15px', padding: '10px', backgroundColor: '#ffe0e0', borderRadius: '4px' }}>{error}</div>}
            {success && <div className="alert alert-success" style={{ color: 'green', marginBottom: '15px', padding: '10px', backgroundColor: '#e0ffe0', borderRadius: '4px' }}>{success}</div>}

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
                                    disabled={loading}
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
                                    disabled={loading}
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
                                    disabled={loading}
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
                                    disabled={loading}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    disabled={loading}
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
                                    disabled={loading}
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
                                    disabled={loading}
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
                                    disabled={loading}
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
                                    disabled={loading}
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
                                    disabled={loading}
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
                                    disabled={loading}
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
                                    disabled={loading}
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
                                    disabled={loading}
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
                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Registrando...' : 'Registrar'}
                    </button>
                    <button type="button" className="cancel-btn" onClick={() => window.history.back()} disabled={loading}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}