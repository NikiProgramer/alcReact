import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import RoleHome from './pages/RoleHome'
import Personal from './pages/personal/Personal'
import Bodega from './pages/bodega/Bodega'
import Ventas from './pages/ventas/Ventas'

// personal sub-pages
import PersonalInfo from './pages/personal/informacion/InformacionPersonal'
import PersonalList from './pages/personal/lista/ListaEmpleados'
import PersonalHorario from './pages/personal/horario/HorarioPersonal'

// bodega sub-pages
import BodegaView from './pages/bodega/visualizar/VisualizarBodega'
import BodegaIngresar from './pages/bodega/ingresar/IngresarMercancia'
import BodegaInfo from './pages/bodega/info/InformacionProducto'
import BodegaStats from './pages/bodega/stats/EstadisticasProducto'

// ventas sub-pages
import VentasRegistrar from './pages/ventas/registrar/RegistrarVenta'
import VentasRegistros from './pages/ventas/registros/RegistrosVentas'
import VentasInventarios from './pages/ventas/inventarios/Inventarios'

// info.Empresa pages for directivo role
import Tiendas from './pages/info_empresa/tiendas/Tiendas'
import Proveedores from './pages/info_empresa/proveedores/Proveedores'
import Informes from './pages/info_empresa/informes/Informes'
import Contabilidad from './pages/info_empresa/contabilidad/Contabilidad'
import Register from './pages/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home/:role" element={<RoleHome />}>
          <Route path="personal" element={<PersonalInfo />} />
          <Route path="personal/info" element={<PersonalInfo />} />
          <Route path="personal/list" element={<PersonalList />} />
          <Route path="personal/horario" element={<PersonalHorario />} />

          <Route path="bodega" element={<Bodega />} />
          <Route path="bodega/view" element={<BodegaView />} />
          <Route path="bodega/ingresar" element={<BodegaIngresar />} />
          <Route path="bodega/info" element={<BodegaInfo />} />
          <Route path="bodega/stats" element={<BodegaStats />} />

          <Route path="ventas" element={<Ventas />} />
          <Route path="ventas/registrar" element={<VentasRegistrar />} />
          <Route path="ventas/registros" element={<VentasRegistros />} />
          <Route path="ventas/inventarios" element={<VentasInventarios />} />

          {/* info.Empresa routes for directivo */}
          <Route path="info_empresa/tiendas" element={<Tiendas />} />
          <Route path="info_empresa/proveedores" element={<Proveedores />} />
          <Route path="info_empresa/informes" element={<Informes />} />
          <Route path="info_empresa/contabilidad" element={<Contabilidad />} />
        </Route>
      </Routes>
      <footer style={{ position: 'fixed', left: 12, bottom: 12 }}>
        <Link to="/" style={{ color: '#fff', textDecoration: 'underline' }}>Back to login</Link>
      </footer>
    </>
  )
}

export default App
