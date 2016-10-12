
Instrucciones para arrancar el proyecto!
===================


>Lo primero que hay que hacer es descargarse [Node.js](https://nodejs.org/es/download/package-manager/) (recomendado v6.x). Node.js nos instlará también su gestor de paquetes **npm**.

> Una vez instalado Node.js vamos al directorio _prensa/angular_project/server _ y ejecutamos ```npm install package.json```. Esto instalará las dependencias de Node.js para este projecto, las dependencias se encuentran anotadas en el archivo **package.json**.

>Cuando termine la instalación se ejecuta ```node server.js``` y la aplicación se estrá ejecuntando en http://localhost:3000/

> Para desarrollo es recomendable la instalación de **nodemon**  ```sudo npm install -g nodemon``` . Este paquete se ejecuta como ```nodemon server.js``` y lanzará la aplicación igual que node, pero con la particularidad de que observará los archivos, y si estos cambian se recargará todo el servidor sin necesidad de pararlo y arrancarlo a cada cambio del servidor.
