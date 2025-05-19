# API de Biblioteca

Una API REST para gestionar usuarios en un sistema de biblioteca, construida con Express, TypeScript, Prisma y PostgreSQL en Docker.

## Requisitos
- Node.js
- Docker
- npm

## Configuración
1. Clona el repositorio:
   git clone <url-del-repositorio>
   cd biblioteca-api

   
2. Instala las dependencias:

    npm install

3. Inicia PostgreSQL con Docker:

    docker-compose up -d

4. Ejecuta las migraciones de Prisma:

    npm run prisma:migrate

5. Inicia el servidor de desarrollo:

    npm run dev

## Endpoints
GET /usuarios: Lista todos los usuarios.

GET /usuarios/:id: Obtiene un usuario por ID.

POST /usuarios/register: Registra un nuevo usuario.

PUT /usuarios/:id: Actualiza un usuario.

DELETE /usuarios/:id: Elimina un usuario.

Variables de Entorno
Crea un archivo .env con:

PORT=3000
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/biblioteca"
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=biblioteca

