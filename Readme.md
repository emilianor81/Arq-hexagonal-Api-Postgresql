

# API-CRUD-ARQ_HEXA-VERTICAL_SLICING - PostgreSQL

Este proyecto es una API RESTful creada con **Node.js**, **Express**, **Sequelize**, y **PostgreSQL**, siguiendo una arquitectura **hexagonal con vertical slicing**. La API permite realizar operaciones CRUD para gestionar usuarios y productos. La base de datos utilizada es **PostgreSQL** y la conexión se gestiona con **Sequelize**.


## Tabla de Contenidos
1. [Requisitos Previos](#requisitos-previos)
2. [Instalación](#instalación)
3. [Configuración](#configuración)
4. [Levantando la Aplicación](#levantando-la-aplicación)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Endpoints de la API](#endpoints-de-la-api)
7. [Descripción Técnica](#descripción-técnica)
8. [Contribuciones](#contribuciones)
9. [Licencia](#licencia)

---

## Requisitos Previos

Asegúrate de tener instalado lo siguiente en tu máquina antes de continuar:

- [Node.js](https://nodejs.org/en/) (v14+)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Postman](https://www.postman.com/) o cURL (para probar la API)

---

## Instalación

Sigue estos pasos para levantar la aplicación localmente:

1. Clona el repositorio:
```bash
git clone https://github.com/emilianor81/Arq-hexagonal-Api-Postgresql.git
```


2. Navega al directorio del proyecto:
```bash
cd API-CRUD-ARQ_HEXA-VERTICAL_SLICING-postgreSql
```

3. Instala las dependencias:

```bash
npm install
```

4. Configura las variables de entorno:

Crea un archivo `.env` en la raíz del proyecto identico a: .env.template


5. Levanta la base de datos usando docker-compose:

```bash
docker-compose up -d
```

6. Inicia el servidor:

npx ts-node src/infraestructura/server.ts


El servidor debería estar corriendo en `http://localhost:3000`.




## Estructura del directorio del proyecto:

```bash
my-app/
├── src/
│   ├── usuarios/
│   │   ├── aplicacion/
│   │   │   └── usuarioServicio.ts
│   │   ├── dominio/
│   │   │   ├── entidades/
│   │   │   │   └── usuario.ts
│   │   │   ├── repositorios/
│   │   │   │   └── usuarioRepositorio.ts
│   │   ├── infraestructura/
│   │   │   ├── controladores/
│   │   │   │   └── usuarioControlador.ts
│   │   │   ├── rutas/
│   │   │   │   └── usuarioRutas.ts
│   │   │   ├── db.ts
│   ├── productos/
│   │   ├── aplicacion/
│   │   │   └── productoServicio.ts
│   │   ├── dominio/
│   │   │   ├── entidades/
│   │   │   │   └── producto.ts
│   │   │   ├── repositorios/
│   │   │   │   └── productoRepositorio.ts
│   │   ├── infraestructura/
│   │   │   ├── controladores/
│   │   │   │   └── productoControlador.ts
│   │   │   ├── rutas/
│   │   │   │   └── productoRutas.ts
│   ├── infraestructura/
│   │   └── server.ts
|   |   └── db.ts
├── .env
├── tsconfig.json
├── package.json
└── README.md
```
#### infraestructura/:

Contiene la configuración de la base de datos y las rutas de los controladores.

#### dominio/: 
Contiene las entidades del negocio y los repositorios.

#### aplicacion/: 
Contiene la lógica de negocio (servicios).

#### usuarios/ y productos/: 
Cada entidad se organiza de forma independiente con sus propias capas.





## Endpoints de la API

1. **Productos API**

- `GET /api/productos`: Obtiene todos los productos
- `GET /api/productos/{id}`: Obtiene un producto específico
- `POST /api/productos`: Crea un nuevo producto
```bash
Body: { "descripcion": "descripcion", "precio": 100 }
```

- `PUT /api/productos/{id}`: Actualiza un producto existente

```bash
Body: { "descripcion": "NUEVA - descripcion", "precio": 100 }
```
- `DELETE /api/productos/{id}`: Elimina un producto


2. **Usuarios API**

- `GET /api/usuarios`: Obtener todos los usuarios.
- `GET /api/usuarios/:id`: Obtener un usuario por su ID.
- `POST /api/usuarios`: Crear un nuevo usuario.
```bash
Body: { "email": "email", "password": "password" }
```
- `PUT /api/usuarios/:id`: Actualizar un usuario existente.
```bash
Body: { "email": "nuevo-email", "password": "nueva-password" }
```
- `DELETE /api/usuarios/`:id: Eliminar un usuario por su ID.

    - `POST /api/usuarios/registro`: Registra un nuevo usuario
    - `POST /api/usuarios/login`: Inicia sesión de usuario



#### Descripción Técnica
Arquitectura Hexagonal: La lógica de negocio (dominio) está desacoplada de la infraestructura. Las entidades y reglas de negocio no dependen de las capas externas, como la base de datos o la red.
Sequelize: ORM para conectar y manejar la base de datos PostgreSQL.
Express: Framework de Node.js utilizado para manejar las rutas de la API.


### Autor
Ing.Emiliano Rodriguez - [LinkedIn](https://www.linkedin.com/in/ing-emilianor)

