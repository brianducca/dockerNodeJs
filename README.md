**DOCKER Desarrollo de Aplicaciones II**

----
## **Pasos para utilizar**
----

Dentro de la carpeta que contiene el archivo docker-compose.yml corremos el siguiente comando:

*  ```docker-compose build ```

Esperamos a que finalize (en caso de error, correr el comando con ```sudo``` ) y luego ejecutamos:

*  ```docker-compose up ```

Gracias a la herramienta **nodemon** , cuando guardemos cambios en la api, se refrescarán automáticamente.

* **Puerto:**

  4005


* **Importante:**

Reemplazar dentro de la carpeta **/api** el contenido, por el contenido de la api que querramos levantar

----
## **Archivos**
----

* **Dockerfile:**

Lo que hace este archivo es llamar a la última versión de Node(en caso que necesitemos, se puede especificar una versión), crea un directorio de trabajo y lo usa.
Luego agrega el package de ``` nodemon ```, que nos va a servir para que actualize los cambios que vamos haciendo a la api de manera automática.
Como paso siguiente, se ubica en el directorio que se había creado, agrega el ``` package.json ``` de nuestro proyecto y instala los paquetes con ``` npm install ```.
Por último expone el puerto 3000 y corre nuestra api.

* **docker-compose.yml:**

Genera el contenedor basado en  ```Dockerfile``` , agrega un volúmeny hace que el puerto 3000 se convierta en el 4005 para afuera.
Un volúmen nos permite copiar los archivos de nuestra máquina al docker para que de esta forma podamos trabajar desde fuera sin la necesidad de meter los archivos al Docker cada vez que los actualizamos.

* **.dockerignore:**

Al igual que ```.gitignore ``` sirve para que los archivos especificados dentro, no se copien a nuestro contenedor.