# Docker MYSQL

```sh
docker volume create mysql_db

docker run -d -p 3306:3306 --name mysql_db -e MYSQL_ROOT_PASSWORD=root --mount src=mysql_db,dst=/var/lib/mysql mysql
```
