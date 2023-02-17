# PROYECTO DE FILTRO POR FECHA DE REGISTROS EN MONGODB
El proyecto esta separado en un servidor frontend y otro servidor backend.

## Servidor frontend:
Para levantar el servidor `frontend` accede a la carpeta frontend y ejecuta
el comando `npx webpack serve`.

## Servidor backend:
Para levantar el servidor backend accede a la carpeta `backend` y ejecuta el
comando `npx nodemon`. El servidor backend se conecta a una base de datos
mongodb con contraseña habilitado, levanta el servidor mongodb, y cambia
los parametros de la conexión a la base de datos en el archivo `.env`
de acuerdo a su preferencia.
