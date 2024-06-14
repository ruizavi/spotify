## Clone Spotify

Se trata de un clone escrito con Typescript (React & Express), usando la menor cantidad de modulos de la comunidad posible, usa una base de datos MySQL, y un bucket de R2 (Cloudflare) para almacenar los archivos estaticos

Para levantar el proyecto requerimos una instalación de MySQL, o en su defecto un contenedor o servicio en la nube que provea el servidor

```sh
docker volume create mysql_db

docker run -d -p 3306:3306 --name mysql_db -e MYSQL_ROOT_PASSWORD=root --mount src=mysql_db,dst=/var/lib/mysql mysql
```

En el proyecto de server, instalamos las dependencias, asignamos las variables de entorno en el archivo `.env` y ejecutamos

```sh
npm install

npm run dev
```


En el lado del cliente

```sh
npm install

npm run dev
```

---

El proyecto aun se encuentra en desarrollo, no es lo suficientemente maduro para realizar su despliegue en producción, las tareas pendientes se listan adelante

- [x] Mantener persistencia de la canción al cambiar entre vistas
- [ ] Vista /app/collection/artist/:id en el cliente, para la vista principal por artista
- [ ] Vista /app/collection/album/:id en el cliente, para la vista pricipal por album
- [ ] Vista /app/collection/playlist/:id en el cliente, para la vista pricipal por playlist
- [ ] Vista de busqueda, endpoint funciona de forma adecuada
- [ ] Agregar botones de reproduccion/pause en los componentes que correspondan a tarjetas o filas reproducibles
- [ ] Implementacion de socket.io en React para las siguientes acciones
  - [ ] Agregar botones para indicar que un elemento te gusta (like)
  - [ ] Cambiar el estado de la canción en reproduccion, para persistencia del estado
  - [ ] JAM
- [ ] Permitir crear playlist, y cambiar la foto del usuario
- [ ] Agregar test unitarios y de integración en el servidor
- [ ] Preparar el proyecto para despliegue en producción
- [ ] Agregar herramientas de CI/CD (pre-commit, lint-commit, github actions)
- [ ] Refactorización
- [ ] Cliente movil (Flutter)
