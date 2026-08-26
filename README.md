# I-WORK Command Center — Versión personal

Esta es tu app lista para publicar y usar directamente, sin pago ni login — solo tú, trabajando.

## Contenido

```
index.html       → la app completa (dashboard, kanban, proyectos, CRM, calendario, mentor IA, caja de ideas)
api/mentor.js     → función serverless (Vercel) para el Mentor IA y la Caja de Ideas
netlify/...       → lo mismo, versión Netlify
netlify.toml      → configuración de rutas para Netlify
```

## Publicar en Vercel (recomendado)

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a https://vercel.com → **Add New Project** → importa el repositorio.
3. Antes de darle **Deploy**, en **Environment Variables** agrega:
   - `ANTHROPIC_API_KEY` → tu clave de https://console.anthropic.com (necesaria para el Mentor IA y la Caja de Ideas)
4. Dale **Deploy**. En segundos tendrás tu URL (`tuapp.vercel.app`) para mostrarla y trabajar desde ahí.

## Publicar en Netlify (alternativa)

1. Sube la carpeta a GitHub.
2. Entra a https://app.netlify.com → **Add new site → Import an existing project** → conecta el repositorio.
3. En **Site configuration → Environment variables**, agrega `ANTHROPIC_API_KEY`.
4. Dale **Deploy site**.

## Nota sobre tus datos

Tus tareas, proyectos y clientes se guardan en el navegador donde la uses (localStorage). Si la abres desde otro computador o celular, empezará con los datos iniciales de ejemplo — no se sincroniza automáticamente entre dispositivos. Para eso, el siguiente paso sería sumar una base de datos real (te puedo ayudar cuando lo necesites).

## Cuando quieras venderla más adelante

Ya tienes armada, aparte, la versión con landing + pago con Stripe + acceso por correo — la dejamos guardada para cuando decidas publicarla como producto.
