# Integración Backend - Frontend

## Resumen de cambios

Se han actualizado los componentes `Login.jsx` y `Register.jsx` para conectar con tu backend Express en el puerto 3000.

### Cambios en `Login.jsx`

1. **Cambio de campos**: Se cambió `username` por `email` para coincidir con tu backend
2. **Integración con API**:
   - Se agregó llamada `fetch` a `http://localhost:3000/login`
   - Manejo de errores con mensajes específicos
   - Estado de carga (`loading`) para deshabilitar inputs durante la solicitud
   - Mostrar mensajes de error en tiempo real

3. **Estados añadidos**:
   ```javascript
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState('')
   ```

### Cambios en `Register.jsx`

1. **Integración con API**:
   - Se agregó llamada `fetch` a `http://localhost:3000/register`
   - Manejo de errores con mensajes específicos
   - Redirige automáticamente al login después de 2 segundos si el registro es exitoso
   - Muestra mensajes de éxito/error

2. **Nuevo campo**: Se agregó el campo `password` al formulario (requerido por tu backend)

3. **Estados añadidos**:
   ```javascript
   const [loading, setLoading] = useState(false)
   const [error, setError] = useState('')
   const [success, setSuccess] = useState('')
   ```

4. **Campos deshabilitados durante carga**: Todos los inputs y botones se deshabilitan mientras se procesa la solicitud

## Cómo usar

### 1. Asegúrate que tu servidor Express esté activo

```bash
node servidor.js
# Debería mostrar: Example app listening on port 3000
```

### 2. Inicia el frontend React

```bash
npm run dev
```

### 3. Prueba Login

- Ve a la página de login
- Ingresa un email y contraseña existentes en tu base de datos
- Si las credenciales son correctas, será redirigido a la página home correspondiente

### 4. Prueba Register

- Ve a la página de registro
- Completa al menos los campos de email y contraseña
- Los demás campos son opcionales para el registro (puedes llenarlos o no)
- Si el registro es exitoso, será redirigido al login automáticamente

## Validaciones

### Login
- Valida que email y contraseña no estén vacíos
- Muestra error si las credenciales son incorrectas (401)
- Muestra error si hay problemas de conexión con la base de datos

### Register
- Valida que email y contraseña no estén vacíos
- Muestra error si el email ya está registrado
- Muestra error si hay problemas de conexión
- Redirige automáticamente al login si es exitoso

## Mensajes de error posibles

| Mensaje | Causa |
|---------|-------|
| "Por favor ingresa email y contraseña" | Campos vacíos en login |
| "Credenciales incorrectas" | Email o contraseña inválidos |
| "Error al conectar con la base de datos" | Problemas de conexión con BD |
| "Error de conexión. Verifica que el servidor esté activo" | Servidor no está corriendo o es inaccesible |
| "Este email ya está registrado" | El email ya existe en la BD |

## Notas importantes

1. **Seguridad**: En producción, nunca envíes contraseñas en texto plano. Implementa hash de contraseñas en el backend (bcrypt, argon2, etc.)

2. **CORS**: Si el backend está en un puerto diferente al frontend, asegúrate de tener CORS configurado en Express:
   ```javascript
   const cors = require('cors');
   app.use(cors());
   ```

3. **Validación de contraseña**: Considera agregar validaciones de fortaleza de contraseña en el frontend

4. **Base de datos**: Asegúrate de que la tabla `usuarios` existe y tiene los campos `email` y `password`
