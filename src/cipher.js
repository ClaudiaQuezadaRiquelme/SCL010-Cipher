/* CIPHER CON MAYUSCULAS
1. Recorrer string
2. tomar el codigo ascii de la letra
2.2 aplicarle la fórmula según el offset
3. devolver letra con codigo
4. transformar codigo ascii devuelto en letra
5. mostrar letra
*/

/* CIPHER CON minusculas
"a" comienza en 97
"A-Z" => 65-90
"a-z" => 97-122
si x es >= 65 y <= 90, es mayúscula
si x es >= 97 y <= 122 es minúscula

  CIPHER CON NÚMEROS
"0" comienza en 48
"0-9" => 48-57
si x es >= 48 y <= 57 es número

  CARACTERES NO PERMITIDOS
"" \ / : * ? " < > | ""
EN ASCII => 92, 47, 58, 42, 63, 34, 60, 62, 124
si x es igual a alguno de esos, no se puede codificar.
indicar que son caracteres no permitidos y que ingrese caracteres válidos

  CARACTERES ACEPTABLES
Caracteres aceptables dejarlos igual
*/

window.cipher = {
  encode: (inputOffset, inputString) => {
    /* Acá va tu código */
    let nameCipher = "";// SI NO PONGO ESO, RETORNA Undefined+respuesta
    //Recorrer string
    for (let i = 0; i < inputString.length; i++) {
      //tomar el codigo ascii de la letra
      let codeChart = inputString.charCodeAt(i);

      if (codeChart >= 65 && codeChart <= 90) {
        //es mayúscula
        nameCipher += String.fromCharCode((codeChart - 65 + inputOffset) % 26 + 65);
      } else if (codeChart >= 97 && codeChart <= 122) {
        //es minúscula
        nameCipher += String.fromCharCode((codeChart - 97 + inputOffset) % 26 + 97);
      } else if (codeChart >= 48 && codeChart <= 57) {
        //es número
        nameCipher += String.fromCharCode((codeChart - 48 + inputOffset) % 10 + 48);
      } else if (codeChart === 92 || codeChart === 47 || codeChart === 58 || codeChart === 42 || codeChart === 63 || codeChart === 34 || codeChart === 60 || codeChart === 62 || codeChart === 124) {
        //son caracteres no permitidos
        //no hace nada. Queda string retornado más corto que string ingresado.
        //alert('Hay caracteres no permitidos. No serán considerados.');
      } else {
        //Caracteres aceptables dejarlos igual
        nameCipher += String.fromCharCode(codeChart);
      }

      //aplicarle la fórmula según el offset
      //devolver letra con codigo
      //transformar codigo ascii devuelto en letra

      //nameCipher += String.fromCharCode((codeChart - 65 + inputOffset) % 26 + 65);
    }
    return nameCipher;
  },
  decode: (inputOffset, inputString) => {
    /* Acá va tu código */
    let nameDecipher = "";// SI NO PONGO ESO, RETORNA Undefined+respuesta
    //Recorrer string
    for (let i = 0; i < inputString.length; i++) {
      //tomar el codigo ascii de la letra
      let codeChart = inputString.charCodeAt(i);
      //console.log("codeChart " + codeChart);//BIEN
      if (codeChart >= 65 && codeChart <= 90) {
        //es mayúscula (FUNCIONA)
        nameDecipher += String.fromCharCode((codeChart + 65 - inputOffset) % 26 + 65);
      } else if (codeChart >= 97 && codeChart <= 122) {
        //es minúscula (FUNCIONA)
        //Lo utilizo como ejemplo para encontrar la fórmula para números.
        //no sé por qué funciona, pero funciona.
        //lo encontré en google.
        nameDecipher += String.fromCharCode((codeChart + 85 - inputOffset) % 26 + 97);

      } else if (codeChart >= 48 && codeChart <= 57) {
        //es número (FUNCIONA)
        //lo encontramos con pruebas con fuerza bruta hasta encontrar número correcto que se sume a codeChart desde 48 restando 1 en 1.
        //ej:
        //(codeChart + 47 - inputOffset) % 10 + 48 //NO FUNCIONA
        //(codeChart + 46 - inputOffset) % 10 + 48 //NO FUNCIONA
        //...
        //(codeChart + 43 - inputOffset) % 10 + 48 //NO FUNCIONA
        //(codeChart + 42 - inputOffset) % 10 + 48 //SÍ FUNCIONA
        nameDecipher += String.fromCharCode((codeChart + 42 - inputOffset) % 10 + 48);

      } else if (codeChart === 92 || codeChart === 47 || codeChart === 58 || codeChart === 42 || codeChart === 63 || codeChart === 34 || codeChart === 60 || codeChart === 62 || codeChart === 124) {
        //son caracteres no permitidos (FUNCIONA)
        //no hace nada. Queda string retornado más corto que string ingresado.
        //alert('Hay caracteres no permitidos. No serán considerados.');
      } else {
        //Caracteres aceptables dejarlos igual (FUNCIONA)
        nameDecipher += String.fromCharCode(codeChart);
      }

      //aplicarle la fórmula según el offset
      //devolver letra con codigo
      //transformar codigo ascii devuelto en letra

      //nameDecipher += String.fromCharCode((codeChart + 65 - inputOffset) % 26 + 65);
    }
    return nameDecipher;
  }
};
