
console.log("%cADEventExtension START", "color: green; font-size: 64px;");


//Iniciamos la primera vez sin setTimeout dado que la ejecución del mismo tiene un delay que hace que no se vea totalmente fluido
if (document.querySelector("div.fc-ab-root")) { // Válido para Forocoches, Marca y Elmundo
  document.querySelector("div.fc-ab-root").remove();
  console.log("%cMODAL DELETED", "color: red; font-size: 64px;");
}
else if (document.querySelector("#didomi-host")) { // Valido para Elmundo y Marca en modo incognito
  document.querySelector("#didomi-host").remove();
  console.log("%cMODAL DELETED", "color: red; font-size: 64px;");
}
document.body.className = ""; // Eliminar todas las clases del body
document.body.style.overflow = "scroll";


// Definir una función para ejecutar tu código
function executeCode() {
  if (document.querySelector("div.fc-ab-root")) { // Válido para Forocoches, Marca y Elmundo
    document.querySelector("div.fc-ab-root").remove();
    console.log("%cMODAL DELETED", "color: red; font-size: 64px;");
  }
  else if (document.querySelector("#didomi-host")) { // Valido para Elmundo y Marca en modo incognito
    document.querySelector("#didomi-host").remove();
    console.log("%cMODAL DELETED", "color: red; font-size: 64px;");
  }
  document.body.className = ""; // Eliminar todas las clases del body
  document.body.style.overflow = "scroll";
}

// Ejecutar el código repetidamente .5
var intervalId = setInterval(executeCode, 500);

// Detener la ejecución después de 5 segundos
setTimeout(function () {
  clearInterval(intervalId); // Detener la ejecución
  console.log("%cADEventExtension END", "color: green; font-size: 64px;");

}, 5000);
