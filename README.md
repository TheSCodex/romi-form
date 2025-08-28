# Registro de Usuarios – Express + EJS

Este proyecto es una aplicación básica de registro de usuarios construida con **Node.js**, **Express**, **EJS** y **SQLite3**.

## Tecnologías usadas

* **Express**: framework backend para Node.js.
* **EJS**: motor de plantillas para renderizar vistas.
* **SQLite3**: base de datos ligera para almacenar usuarios.
* **Express EJS Layouts**: manejo de layouts para no repetir código en vistas.
* **CSS**: estilos personalizados para la UI.

## Arquitectura del proyecto

```
project/
│── src/
│   ├── server.ts          # Configuración principal del servidor
│   ├── db.ts              # Conexión a SQLite y creación de tabla usuarios
│   ├── routes/
│   │   └── user.ts        # Rutas para registrar y mostrar usuarios
│   ├── controllers/
│   │   └── userController.ts  # Lógica de negocio (guardar y listar usuarios)
│   ├── models/
│   │   └── userModel.ts   # Consultas SQL hacia la base de datos
│── views/
│   ├── layout.ejs         # Layout base (header, footer, etc.)
│   ├── register.ejs       # Formulario de registro
│   └── users.ejs          # Listado de usuarios registrados
│── public/
│   └── css/
│       └── styles.css     # Estilos generales
│── package.json
│── tsconfig.json
│── README.md
```

## Cómo funciona

1. El usuario accede a **`/register`** donde ve el formulario de registro.
2. Al enviar el formulario, los datos se guardan en **SQLite** mediante el modelo `userModel.ts`.
3. El usuario es redirigido a **`/users`**, donde se muestra una tabla con todos los registros almacenados.
4. El layout (`layout.ejs`) asegura que el header y footer estén en todas las vistas.

## Instrucciones para correr el proyecto

```bash
# Instalar dependencias
npm install

# Compilar TypeScript
npm run build

# Ejecutar el servidor
npm start
```

El servidor estará disponible en:
[http://localhost:3000](http://localhost:3000)