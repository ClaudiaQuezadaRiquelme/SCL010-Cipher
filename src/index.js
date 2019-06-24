//DIV MOSTRAR - OCULTAR
/*
1. Guardar botón en una variable
1.1 cerciórate que el botón tiene id
2.AddEventListener para escuchar el click del botón
3. ocultar div Welcome, mostrar div enter
*/
const btnYes = document.getElementById("yes");
btnYes.addEventListener("click", ()=> {
  //ocultar div Welcome, mostrar div enter
  document.getElementById("welcome").style.display = "none";
  document.getElementById("enter").style.display = "block";
  document.getElementById("enterA").style.display = "block";
  document.getElementById("enterB").style.display = "block";
  //Mostrar botones ingresar.
  //Agrego esto porque en una iteración que no reconocí, se borró uno de los botones ingresar y no sé por qué
  document.getElementById("btnEnter1").style.display = "block";
  document.getElementById("btnEnter2").style.display = "block";
  //limpiar inputs
  document.getElementById("nameA").value = "";
  document.getElementById("offsetA").value = "";
  document.getElementById("nameB").value = "";
  document.getElementById("offsetB").value = "";

});

//DIV MOSTRAR - OCULTAR
/*
1. Guardar botón en una variable
1.1 cerciórate que el botón tiene id
3. ocultar div enterB [o enterA], mostrar div enterA [o enterB]
2. AddEventListener para escuchar el click del botón
4. guardar inputOffset
5. guardar inputString
6. llamar encode/decode y mostrar respuesta
7. mostrar botones para volver
*/

const btnEnter1 = document.getElementById("btnEnter1");
btnEnter1.addEventListener("click", ()=> {
  //ocultar div enterB, mostrar div enterA
  document.getElementById("enterB").style.display = "none";
  //guardar inputOffset
  let inputOffset = parseInt(document.getElementById("offsetA").value);
  //guardar inputString
  let inputString = document.getElementById("nameA").value;

  //mostrar respuesta
  document.getElementById("nameA").value = window.cipher.encode(inputOffset, inputString);
  //si el codigo cifrado tiene largo menor al largo del input, es porque habían caracteres inválidos. Desplegar mensaje si es así
  if (inputString.length > document.getElementById("nameA").value.length) {
    document.getElementById("invalid1").style.display = "block";
  }

  //mostrar botones para volver y ocultar boton ingresar
  //CUIDADO PARA VOLVER A MOSTRAR btnEnter1
  //tenemos un error de funcionamiento por esto
  document.getElementById("btnEnter1").style.display = "none";
  document.getElementById("copy1").style.display = "inline-block";
  document.getElementById("comeBack1").style.display = "inline-block";
  document.getElementById("restart1").style.display = "inline-block";
  document.getElementById("cipher").style.display = "block";
  //document.getElementByClassName("show").style.display = "block";//NO FUNCIONA => en google dicen que no existe, no está implementado.
  /* //TAMPOCO FUNCIONA
  let x = document.getElementByClassName("show");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "block";
  };*/ //borré la class "show"


});

const btnEnter2 = document.getElementById("btnEnter2");
btnEnter2.addEventListener("click", ()=> {
  //ocultar div enterA, mostrar div enterB
  document.getElementById("enterA").style.display = "none";
  //guardar inputOffset
  let inputOffset = parseInt(document.getElementById("offsetB").value);
  //guardar inputString
  let inputString = document.getElementById("nameB").value;
  //mostrar respuesta
  document.getElementById("nameB").value = window.cipher.decode(inputOffset, inputString);
  //si el codigo cifrado tiene largo menor al largo del input, es porque habían caracteres inválidos. Desplegar mensaje si es así
  if (inputString.length > document.getElementById("nameB").value.length) {
    document.getElementById("invalid2").style.display = "block";
  }

  //mostrar botones para volver y ocultar boton ingresar
  //CUIDADO PARA VOLVER A MOSTRAR btnEnter1
  //tenemos un error de funcionamiento por esto
  document.getElementById("btnEnter2").style.display = "none";
  document.getElementById("copy2").style.display = "inline-block";
  document.getElementById("comeBack2").style.display = "inline-block";
  document.getElementById("restart2").style.display = "inline-block";
  document.getElementById("decipher").style.display = "block";
  //document.getElementByClassName("show").style.display = "block";//NO FUNCIONA
  /* //TAMPOCO FUNCIONA
  let x = document.getElementByClassName("show");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "block";
  };*/ //borré la class "show"

});

//BOTON COPIAR
/*
1. guardar botón en una variable
2. eventListener cuando presiones el botón
3. copiar con variable = getElementById(INPUT)
4. usar   copyText.select(); y document.execCommand("copy");
x. https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
*/
//guardar botón en una variable
const btnCopy1 = document.getElementById("copy1");
//eventListener cuando presiones el botón
btnCopy1.addEventListener("click", () => {
  //copiar con variable = getElementById(INPUT)
  let myCopy = document.getElementById("nameA");
  //usar   copyText.select(); y document.execCommand("copy");
  myCopy.select();/* Select the text field */
  document.execCommand("copy");/* Copy the text inside the text field */
});

const btnCopy2 = document.getElementById("copy2");
//eventListener cuando presiones el botón
btnCopy2.addEventListener("click", () => {
  //copiar con variable = getElementById(INPUT)
  let myCopy = document.getElementById("nameB");
  //usar   copyText.select(); y document.execCommand("copy");
  myCopy.select();/* Select the text field */
  document.execCommand("copy");/* Copy the text inside the text field */
});

//BOTÓN VOLVER
/*
A. guardar boton volver
B. eventListener cuando presiones el botón
1. Ocultar botones volver e id cipher/decipher.
2. Mostrar boton ingresar.
3. Mostrar enterX.
4. limpiar inputs
*/
const btnComeBack1 = document.getElementById("comeBack1");
btnComeBack1.addEventListener("click", () => {
  //Ocultar botones volver e id cipher/decipher.
  document.getElementById("copy1").style.display = "none";
  document.getElementById("comeBack1").style.display = "none";
  document.getElementById("restart1").style.display = "none";
  document.getElementById("cipher").style.display = "none";
  //Ocultar mensaje inválido si es que se desplegó
  document.getElementById("invalid1").style.display = "none";
  //Mostrar boton ingresar.
  //duplico porque en una iteración que no reconocí, se borró uno de los botones ingresar y no sé por qué
  document.getElementById("btnEnter1").style.display = "block";
  document.getElementById("btnEnter2").style.display = "block";
  //Mostrar enterX.
  document.getElementById("enterB").style.display = "block";
  //limpiar inputs
  document.getElementById("nameA").value = "";
  document.getElementById("offsetA").value = "";
  document.getElementById("nameB").value = "";
  document.getElementById("offsetB").value = "";
});

const btnComeBack2 = document.getElementById("comeBack2");
btnComeBack2.addEventListener("click", () => {
  //Ocultar botones volver e id cipher/decipher.
  document.getElementById("copy2").style.display = "none";
  document.getElementById("comeBack2").style.display = "none";
  document.getElementById("restart2").style.display = "none";
  document.getElementById("decipher").style.display = "none";
  //Ocultar mensaje inválido si es que se desplegó
  document.getElementById("invalid2").style.display = "none";
  //Mostrar boton ingresar.
  //duplico porque en una iteración que no reconocí, se borró uno de los botones ingresar y no sé por qué
  document.getElementById("btnEnter2").style.display = "block";
  document.getElementById("btnEnter1").style.display = "block";
  //Mostrar enterX.
  document.getElementById("enterA").style.display = "block";
  //limpiar inputs
  document.getElementById("nameA").value = "";
  document.getElementById("offsetA").value = "";
  document.getElementById("nameB").value = "";
  document.getElementById("offsetB").value = "";
});

//BOTÓN REINICIAR
/*
A. guardar boton reiniciar
B. eventListener cuando presiones el botón
1. Ocultar botones volver e id cipher/decipher.
2. limpiar inputs
3. Ocultar div enter, enterX
4. Mostrar welcome
*/
const btnRestart1 = document.getElementById("restart1");
btnRestart1.addEventListener("click", () => {
  //Ocultar botones volver e id cipher/decipher.
  document.getElementById("copy1").style.display = "none";
  document.getElementById("comeBack1").style.display = "none";
  document.getElementById("restart1").style.display = "none";
  document.getElementById("cipher").style.display = "none";
  //Ocultar mensaje inválido si es que se desplegó
  document.getElementById("invalid1").style.display = "none";
  //limpiar inputs
  document.getElementById("nameA").value = "";
  document.getElementById("offsetA").value = "";
  document.getElementById("nameB").value = "";
  document.getElementById("offsetB").value = "";
  //Ocultar div enter, enterX
  document.getElementById("enterA").style.display = "none";
  document.getElementById("enterB").style.display = "none";
  document.getElementById("enter").style.display = "none";
  //Mostrar welcome
  document.getElementById("welcome").style.display = "block";
});

const btnRestart2 = document.getElementById("restart2");
btnRestart2.addEventListener("click", () => {
  //Ocultar botones volver e id cipher/decipher.
  document.getElementById("copy2").style.display = "none";
  document.getElementById("comeBack2").style.display = "none";
  document.getElementById("restart2").style.display = "none";
  document.getElementById("decipher").style.display = "none";
  //Ocultar mensaje inválido si es que se desplegó
  document.getElementById("invalid2").style.display = "none";
  //limpiar inputs
  document.getElementById("nameA").value = "";
  document.getElementById("offsetA").value = "";
  document.getElementById("nameB").value = "";
  document.getElementById("offsetB").value = "";
  //Ocultar div enter, enterX
  document.getElementById("enterA").style.display = "none";
  document.getElementById("enterB").style.display = "none";
  document.getElementById("enter").style.display = "none";
  //Mostrar welcome
  document.getElementById("welcome").style.display = "block";
});
