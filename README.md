# Archivos Secretos

_¿Tienes archivos vergonzosos y no quieres que nadie sepa cómo se llaman? Archivos Secretos te ofrece una sencilla solución: modificar el nombre de tu archivo con una clave secreta numérica de tu elección para que nadie sepa el nombre de tu archivo._

## Usuarios

_Este producto está dirigido a personas que quieran mantener su privacidad respecto al nombre de sus archivos en caso de que los guarden en un dispositivo compartido o que sientan que muchas personas miran su computadora y pueden ver de reojo el nombre de aquellos archivos que no deseen que se conozcan._

_Los usuarios pueden utilizar el producto en un momento privado para renombrar sus archivos con ayuda de un número que para ellos tenga sentido, cambiar los nombres y sentirse a salvo porque los nombres de sus cosas no llaman mucho la atención_
```
- otras personas pueden pensar que son archivos de sistema o descargas sin renombrar de internet-
```
_y porque pueden recuperar el nombre del archivo guardado en caso de que no lo recuerden_
```
- como anteriormente se hacía: se guardaban los archivos dentro de muchas carpetas dentro de otras para luego poner un nombre ficticio que luego no podía relacionar con nada concreto-.
```


## Proceso de Diseño

### Viaje del usuario
***
1. Primero se le plantea la problemática al Usuario. El usuario debe elegir si usar o no la aplicación. Se muestra el texto de invitación además del nombre de la Aplicación con imágenes en sombra sugerentes.
2. Cuando el usuario elige usar la app, aparecen las herramientas que tiene disponible para ingresar el nombre de su archivo y la clave a elección, ya sea para esconder el nombre o para revelarlo.
3. Cuando presiona ingresar y ha ingresado los textos correspondientes, se oculta la herramienta no utilizada y se revela el nombre de archivo codificado o el nombre verdadero según corresponda y se mantiene a la vista la clave numérica. Se revela la opción de volver a la pantalla anterior o reiniciar toda la aplicación.
***

###Observaciones
***
1. El título y fotos sugerentes insinúan el tipo de archivos que el usuario querría ocultar el nombre.
2. Hay una nota inferior que explica de qué se trata la Clave, con sugerencia breve para elegir alguna adecuada.
3. Botón copiar para guardar de inmediato el nombre del archivo y utilizarlo a su favor.
***


## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Mira **Deployment** para conocer como desplegar el proyecto.


### Pre-requisitos 📋

_Para instalar y testear la aplicación para propósitos de desarrollo y pruebas, necesitas:_

***
1. Para ejecutar los comandos en consola necesitarás una :shell:
   [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
   para interpretar líneas de comando (command-line
   interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
   instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
   ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
   también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win).
2. Debes tener instalado [Node.js](https://nodejs.org/) (que
incluye [npm](https://docs.npmjs.com/)) para ejecutar los test. También necesitas [Mocha](https://mochajs.org/). Con ambos podrás ejecutar los test sin problemas.

***

### Instalación 🔧

_Pasos que debes ejecutar para tener un entorno de desarrollo ejecutándose:_

***
1. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
   del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo y te
   darán acceso de lectura en ese repo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu _fork_ a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm
   install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
   incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
***



## Ejecutando las pruebas ⚙️

***
1. Abrir terminal y posicionarse en la carpeta donde dejaste instalado el proyecto.
2. ejecutar el comando `npm test`.
3. Se observarán en consola principalmente las pruebas ejecutadas según las funciones que cumple la aplicación y los resultados esperados.
```
cipher.encode
      ✓ debería ser una función
      ✓ debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33

```
4. Se desplegarán en el navegador los mismos resultados esperados.

***

### Análisis de las pruebas

```
cipher
    ✓ debería ser un objeto
```
_Verifica la naturaleza misma del objeto principal que realiza las funciones de la applicación._

```
cipher.encode
      ✓ debería ser una función
```
_Si no es reconocida como una función, no podemos ejecutar ninguna funcionalidad de la aplicación._

```
cipher.encode
      ✓ debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33
      ✓ debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33
```
_Verifica que la función reconozca mayúsculas y minúsculas y que las codifique correctamente._

```
cipher.encode
      ✓ debería retornar "3456789012" para "0123456789" con offset 33
```
_Verifica que la función reconozca números del 0 al 9 y que los codifique correctamente._

```
cipher.encode
      ✓ debería retornar " ¿¡-_#@%&=+" para " ¿¡-_#@%&=+" con offset 33 => algunos caracteres válidos
      ✓ debería retornar "" para "\/:*?"<>|" (Caracteres no válidos) con offset 33 => caracteres inválidos

```
_Verifica que la función reconozca caracteres válidos e inválidos para crear el nombre de un archivo en el computador. Los caracteres válidos los mantiene sin cambios y los caracteres inválidos los ignora._

```
cipher.decode
      ✓ debería ser una función
```
_Al igual que cipher.encode, si no es reconocida como una función, no podemos ejecutar ninguna funcionalidad de la aplicación_

```
cipher.decode
      ✓ debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33
      ✓ debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset 33
```
_Verifica que la función reconozca mayúsculas y minúsculas y que las decodifique correctamente._

```
cipher.decode
      ✓ debería retornar "0123456789" para "3456789012" con offset 33
```
_Verifica que la función reconozca números del 0 al 9 y que los decodifique correctamente._

```
cipher.decode
      ✓ debería retornar " ¿¡-_#@%&=+" para " ¿¡-_#@%&=+" con offset 33 => algunos caracteres válidos
      ✓ debería retornar "" para "\/:*?"<>|" (Caracteres no válidos) con offset 33 => caracteres inválidos
```
_Al igual que cipher.encode, verifica que la función reconozca caracteres válidos e inválidos para crear el nombre de un archivo en el computador. Los caracteres válidos los mantiene sin cambios y los caracteres inválidos los ignora._


## Deployment 📦

_Agrega notas adicionales sobre como hacer deploy_

Deploy original de [Archivos Secretos](https://claudiaquezadariquelme.github.io/SCL010-Cipher/src/index.html).

Desde terminal, para hacer deploy primero subo mis cambios a mi remote con los comandos `git push [nombre-remote] [branch]`, ejemplo:
```
git push origin master
```
Y luego creo mi rama gh-pages y subo mis cambios con `:gh-pages` para crear mi deploy.
```
git push origin master:gh-pages
```


## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [SCL010-Cipher](https://github.com/Laboratoria/SCL010-Cipher) - Cipher Cesar propuesto para el proyecto.
* [Git y GitHub](https://docs.google.com/presentation/d/1Jsz3IRNO5-RJ8yltE3qBC10UAYMPkjLp2GK4RUZ72mQ/edit#slide=id.g3a8868e30a_0_109) - Tutorial Git y Github.
* [Caracteres Especiales](http://w3.unpocodetodo.info/utiles/glyphs.php) - Trabajo con caracteres especiales o reservados.
* [Villanuevand](https://gist.github.com/Villanuevand/6386899f70346d4580c723232524d35a) - Para hacer un buen README.


## Autores ✒️

_Todos aquellos que ayudaron a levantar el proyecto desde sus inicios_

* **Claudia Quezada Riquelme** - *Trabajo Inicial* - [ClaudiaQuezadaRiquelme](https://github.com/ClaudiaQuezadaRiquelme)
* **Cifrado César** - *Documentación* - [Laboratoria/SCL010-Cipher](https://github.com/Laboratoria/SCL010-Cipher)
* **Squad 3** - *Trabajo en Equipo*
* **Squad de al lado** - *Ayuda Test adicional*
* **Scarlette ex Squad 2 de preAdmisión** - *Ideas con cifrado en números y uso de caracteres no alfanuméricos*



## Expresiones de Gratitud 🎁

* Gracias a todas por el espíritu cooperador.
* Gracias por compartir ideas en los break.
* Gracias a quien termina algo antes e intenta ayudar a sus compañeras en block.
* Quiero pizza.



---
⌨️ con ❤️ por [ClaudiaQuezadaRiquelme](https://github.com/ClaudiaQuezadaRiquelme)
