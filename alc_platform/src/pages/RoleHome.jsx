import React from 'react'
import { useParams, Link, useLocation, Outlet, useNavigate } from 'react-router-dom'
import './RoleHome.css'
import BreadCrumbs from '../components/BreadCrumbs'
import { useUser } from '../context/UserContext'

export default function RoleHome() {
    const { role } = useParams()
    const { state } = useLocation()
    const { user } = useUser()
    const username = user?.username || state?.username || 'Juan Pérez'
    const store = user?.store || state?.store || 'Tienda ALC Centro'
    const roleLabel = role ? role.charAt(0).toUpperCase() + role.slice(1) : 'Usuario'
    const navigate = useNavigate()
    const roleClass = role ? role.toLowerCase() : 'usuario'
    const [expanded, setExpanded] = React.useState(null)

    function toggleSection(name) {
        setExpanded(prev => prev === name ? null : name)
    }

    // sub-actions per role 
    const subActionsByRole = {
        jefe: {
            personal: [
                { label: 'Información Personal', to: 'personal', primary: true },
                { label: 'Lista De Empleados', to: 'personal' },
                { label: 'Horario', to: 'personal' }
            ],
            bodega: [
                { label: 'Visualizar Bodega', to: 'bodega' },
                { label: 'Ingresar Mercancía', to: 'bodega' },
                { label: 'Información Producto', to: 'bodega' },
                { label: 'Estadísticas por Producto', to: 'bodega' }
            ],
            ventas: [
                { label: 'Registrar Venta', to: 'ventas' },
                { label: 'Ver Registros de Ventas', to: 'ventas' },
                { label: 'Inventarios', to: 'ventas' }
            ]
        },
        administrativo: {
            personal: [
                { label: 'Información Personal', to: 'personal/info', primary: true },
                { label: 'Lista De Empleados', to: 'personal/list' },
                { label: 'Horario', to: 'personal/horario' }
            ],
            bodega: [
                { label: 'Visualizar Bodega', to: 'bodega/view' },
                { label: 'Ingresar Mercancía', to: 'bodega/ingresar' },
                { label: 'Información Producto', to: 'bodega/info' },
                { label: 'Estadísticas por Producto', to: 'bodega/stats' }
            ],
            ventas: [
                { label: 'Registrar Venta', to: 'ventas/registrar' },
                { label: 'Ver Registros de Ventas', to: 'ventas/registros' },
                { label: 'Inventarios', to: 'ventas/inventarios' }
            ]
        },
        directivo: {
            info_empresa: [
                { label: 'Tiendas', to: 'info_empresa/tiendas', primary: true },
                { label: 'Proveedores', to: 'info_empresa/proveedores' },
                { label: 'Informes', to: 'info_empresa/informes' },
                { label: 'Contabilidad', to: 'info_empresa/contabilidad' }
            ],
            bodega: [
                { label: 'Visualizar Bodega', to: 'bodega/view' },
                { label: 'Información Producto', to: 'bodega/info' },
                { label: 'Estadísticas por Producto', to: 'bodega/stats' }
            ],
            ventas: [
                { label: 'Ver Registros de Ventas', to: 'ventas/registros' },
                { label: 'Inventarios', to: 'ventas/inventarios' }
            ]
        },
        default: {
            personal: [{ label: 'Información Personal', to: 'personal', primary: true }, { label: 'Horario', to: 'personal' }],
            bodega: [{ label: 'Visualizar Bodega', to: 'bodega' }, { label: 'Información Producto', to: 'bodega' }],
            ventas: [{ label: 'Registrar Venta', to: 'ventas' }, { label: 'Ver Registros de Ventas', to: 'ventas' }]
        }
    }

    const roleActions = subActionsByRole[roleClass] || subActionsByRole.default

    return (
        <div className={`role-home-root ${roleClass}`}>
            <aside className="rh-sidebar">
                <div className="rh-profile">
                    <div className="avatar"> </div>
                    <h3>{username}</h3>
                    <div className="subtitle">{roleLabel}</div>
                    <div className="store">{store}</div>
                </div>

                <nav className="rh-nav">
                    <button className="nav-btn highlight"><span>Perfil del Empleado</span></button>
                    <button className="nav-btn"><span>Horario</span></button>
                    <button className="nav-btn active"><span>Editar Perfil</span></button>
                    <button className="nav-btn"><span>Mensajería Interna</span></button>
                    <button className="nav-btn" onClick={() => navigate('/')}><span>Cerrar Sesión</span></button>
                    <button className="nav-btn"><span>Ayuda</span></button>
                </nav>
            </aside>

            <main className="rh-main">
                <div className="rh-center-card">
                    <BreadCrumbs />
                    <div className="logo-hero">
                        <div className="logo-left">Company</div>
                        <div className="logo-right">Name</div>
                    </div>

                    <div className="rh-actions">
                        {(roleClass === 'directivo'
                            ? ['info_empresa', 'bodega', 'ventas']
                            : ['personal', 'bodega', 'ventas']
                        ).map((sec) => (
                            <div className="section" key={sec}>
                                <button aria-expanded={expanded === sec} className="big-btn" onClick={() => toggleSection(sec)}>
                                    {sec === 'info_empresa' ? 'Info.Empresa' : sec.charAt(0).toUpperCase() + sec.slice(1)} <span className="chev">▾</span>
                                </button>

                                {expanded === sec && (
                                    <div className="sub-actions">
                                        {(roleActions[sec] || []).map((item, i) => (
                                            <button
                                                key={i}
                                                className={`sub-btn ${item.primary ? 'primary' : ''}`}
                                                onClick={() => navigate(item.to)}
                                            >
                                                {item.label}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="rh-outlet">
                        <Outlet />
                    </div>
                </div>
            </main>

            <aside className="rh-right">
                <div className="card calendar">
                    <h4>Calendario</h4>
                    <div className="calendar-grid">Oct 2025 calendar placeholder</div>
                </div>

                <div className="card news">
                    <h4>Novedades</h4>
                    <ul>
                        <li><strong>Nuevo Producto!</strong><div>Zapatillas Deportivas</div></li>
                        <li><strong>Producto Agotado!</strong><div>Sandalias Verano</div></li>
                        <li><strong>Nueva Tienda Abierta!</strong><div>ALC San José</div></li>
                    </ul>
                </div>
            </aside>

            <footer className="rh-footer">
                <Link to="/">Volver al login</Link>
            </footer>
        </div>
    )
}
