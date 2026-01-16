# Configuración de Decap CMS con Netlify

Esta guía te ayudará a configurar Decap CMS (anteriormente Netlify CMS) en Netlify para poder editar el contenido del portfolio desde una interfaz visual.

## Prerequisitos

- Repositorio Git (GitHub, GitLab o Bitbucket)
- Cuenta de Netlify (gratuita)
- Sitio desplegado en Netlify

## Pasos de Configuración

### 1. Conectar tu Repositorio a Netlify

1. Ve a [Netlify Dashboard](https://app.netlify.com/)
2. Haz clic en **"Add new site"** → **"Import an existing project"**
3. Conecta tu proveedor Git (GitHub/GitLab/Bitbucket)
4. Selecciona tu repositorio
5. Configura las opciones de build:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Haz clic en **"Deploy site"**

### 2. Habilitar Netlify Identity

1. En tu sitio de Netlify, ve a **Site settings** → **Identity**
2. Haz clic en **"Enable Identity"**
3. (Opcional) Configura las opciones de registro:
   - Puedes deshabilitar el registro público si solo quieres que tú uses el CMS
   - Configura los métodos de autenticación (Email, GitHub, GitLab, etc.)

### 3. Habilitar Git Gateway

1. En la misma página de **Identity**, desplázate hacia abajo
2. En la sección **"Services"**, haz clic en **"Enable Git Gateway"**
3. Esto permite que el CMS haga commits directamente a tu repositorio

### 4. Configurar Usuarios (Opcional pero Recomendado)

1. En **Identity** → **Invite users**
2. Invita a los usuarios que necesitan acceso al CMS
3. Ellos recibirán un email para configurar su contraseña

### 5. Verificar la Configuración

1. Ve a tu sitio en Netlify (ej: `https://tu-sitio.netlify.app`)
2. Accede a `/admin` (ej: `https://tu-sitio.netlify.app/admin`)
3. Deberías ver la interfaz de login de Netlify Identity
4. Inicia sesión con tus credenciales
5. Una vez autenticado, verás el CMS con todas las colecciones de contenido

## Estructura del CMS

El CMS está configurado para editar:

- **Site Configuration** - Configuración global (nombre, email, redes sociales, footer)
- **Home Page** - Contenido de la página principal (hero, selected work, mentions)
- **About Page** - Contenido de la página About con editor Markdown
- **Skills** - Lista de habilidades
- **Work Projects** - Proyectos del portfolio (crear, editar, eliminar)

## Flujo de Trabajo

1. **Editar contenido**: Accede a `/admin` y edita cualquier sección
2. **Guardar cambios**: Los cambios se guardan automáticamente en Git
3. **Deploy automático**: Netlify detecta el cambio y reconstruye el sitio automáticamente
4. **Ver cambios**: Tu sitio se actualiza con el nuevo contenido en 1-2 minutos

## Troubleshooting

### El CMS no carga o muestra errores

- Verifica que Git Gateway esté habilitado en Netlify
- Asegúrate de que el archivo `public/admin/config.yml` esté correctamente formateado
- Verifica que la rama configurada en `config.yml` (branch: main) coincida con tu rama principal

### No puedo hacer login

- Verifica que Netlify Identity esté habilitado
- Asegúrate de haber invitado tu email o permitido el registro
- Revisa la configuración de autenticación en Identity settings

### Los cambios no se guardan

- Verifica que Git Gateway esté habilitado
- Revisa los permisos del repositorio en GitHub/GitLab
- Verifica que el repositorio esté correctamente conectado a Netlify

### El formato del archivo es incorrecto después de editar

- El CMS valida automáticamente con los schemas de Astro
- Si hay un error de formato, Netlify mostrará un error en el build
- Puedes revertir cambios desde Git si es necesario

## Recursos Adicionales

- [Documentación de Decap CMS](https://decapcms.org/docs/)
- [Netlify Identity Docs](https://docs.netlify.com/visitor-access/identity/)
- [Git Gateway Docs](https://docs.netlify.com/visitor-access/git-gateway/)

## Notas Importantes

- El archivo `public/admin/config.yml` contiene la configuración del CMS
- Los cambios se guardan directamente en el repositorio Git
- Siempre puedes revertir cambios desde Git si algo sale mal
- El CMS funciona mejor en navegadores modernos (Chrome, Firefox, Safari, Edge)
