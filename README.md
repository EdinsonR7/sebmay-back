# SebMay Backend

Sistema de gestión de productos y servicios con Node.js, Express y PostgreSQL.

## Descripción

SebMay Backend es una aplicación web que permite gestionar un catálogo de productos y servicios. Implementa operaciones CRUD (Crear, Leer, Actualizar, Eliminar) con una interfaz web intuitiva y una base de datos PostgreSQL.

## Características

- ✨ Gestión completa de productos y servicios
- 📝 Formularios para crear y editar registros
- 🎨 Interfaz de usuario con estilos CSS modernos
- 📊 Base de datos PostgreSQL para almacenamiento persistente
- 🔄 Operaciones CRUD completas
- 🖥️ Vistas renderizadas con EJS

## Requisitos Previos

- Node.js (v14 o superior)
- PostgreSQL (v12 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/EdinsonR7/sebmay-back.git
cd sebmay-back
```

2. Instala las dependencias:

```bash
npm install
```

3. Configura las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto
   - Añade las siguientes variables:

```env
PORT=4000
DB_USER=tu_usuario_postgres
DB_PASSWORD=tu_contraseña_postgres
DB_HOST=localhost
DB_PORT=5432
DB_NAME=nombre_de_tu_base_de_datos
```

4. Crea la base de datos y la tabla necesaria:

```sql
CREATE DATABASE nombre_de_tu_base_de_datos;

CREATE TABLE productos_servicios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    categoria VARCHAR(50),
    tipo VARCHAR(20) CHECK (tipo IN ('producto', 'servicio')),
    precio DECIMAL(10,2),
    stock INTEGER,
    proveedor VARCHAR(100),
    estado VARCHAR(20) DEFAULT 'activo'
);
```

## Uso

1. Inicia el servidor:

```bash
npm run dev
```

2. Abre tu navegador y visita:

```
http://localhost:4000
```

## Estructura del Proyecto

```
src/
├── config/
│   └── db.js          # Configuración de la base de datos
├── controllers/
│   └── productController.js  # Lógica de negocio
├── models/
│   └── productModel.js       # Modelo de datos
├── public/
│   └── styles.css     # Estilos CSS
├── routes/
│   └── productRoutes.js      # Definición de rutas
├── views/
│   ├── layouts/
│   │   └── main.ejs   # Plantilla principal
│   ├── edit.ejs       # Vista de edición
│   ├── index.ejs      # Vista de listado
│   ├── new.ejs        # Vista de creación
│   └── show.ejs       # Vista de detalles
└── index.js           # Punto de entrada de la aplicación
```

## Endpoints API

- `GET /productos` - Lista todos los productos
- `GET /productos/new` - Formulario para crear nuevo producto
- `POST /productos` - Crea un nuevo producto
- `GET /productos/:id` - Muestra detalles de un producto
- `GET /productos/:id/edit` - Formulario para editar producto
- `PUT /productos/:id` - Actualiza un producto
- `DELETE /productos/:id` - Elimina un producto

## Tecnologías Utilizadas

- **Express.js**: Framework web
- **PostgreSQL**: Base de datos
- **EJS**: Motor de plantillas
- **node-postgres**: Cliente PostgreSQL
- **dotenv**: Manejo de variables de entorno
- **method-override**: Soporte para PUT/DELETE en formularios

## Scripts Disponibles

- `npm run dev`: Inicia el servidor en modo desarrollo con nodemon
- `npm start`: Inicia el servidor en modo producción

## Contribución

1. Haz un Fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Autor

**Edinson R7** - [EdinsonR7](https://github.com/EdinsonR7)

---

