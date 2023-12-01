import validator from './validator.js';
const inputName = document.querySelector("#input_name");
const inputNumber = document.querySelector("#input_number");
const inputMonth = document.querySelector("#input_month");
const inputYear = document.querySelector("#input_year");
const inputCvv = document.querySelector("#input_cvv");
const numberCard = document.querySelector("#number_card");
const nameCard = document.querySelector("#nameusuario_card");
const monthExpiracion = document.querySelector("#card_month");
const yearExpiracion = document.querySelector("#card_year");
const form = document.querySelector("#form");
const botonvalidar = document.querySelector("#botonvalidar");

//Primeros eventos para colocar datos//
inputName.addEventListener("input", () => {
  nameCard.innerText = inputName.value;
  if (inputName.value.length === 0) {
    nameCard.innerText = "Juan Perez"
  }
});
form.input_number.addEventListener("keyup", (e) => {
  const valorinput = e.target.value;
  form.input_number.value = valorinput
  //Eliminar espacios en blanco
    .replace(/\s/g, "")
  //Eliminar las letras
    .replace(/\D/g, "")
  //Ponemos espacios cada 4 numeros
  //.replace (/([0-9]{4})/g, "$1 ")
  //Elimina el ultimo espaciado
    .trim();
  numberCard.innerText = form.input_number.value;
  if (inputNumber.value.length === 0) {
    numberCard.innerText = "0000 0000 0000 0000"
  }
  else {
    numberCard.innerText = inputNumber.value.slice(0, -4).replace(/./g, "#") + inputNumber.value.slice(-4);
  }

});

//Generar el selector del mes y agregar valores del mes 1 al 12       
for (let i = 1; i <= 12; i++) {
  const opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerText = i;
  form.input_month.appendChild(opcion);
}

//Generar el selector del año y agregar valores del año actual a 8 años mas
const yearActual = new Date().getFullYear();
for (let i = yearActual; i <= yearActual + 8; i++) {
  const opcion = document.createElement("option");
  opcion.value = i;
  opcion.innerText = i;
  form.input_year.appendChild(opcion);
}

//Colocar selectores de mes, año y cvv en tarjeta de datos
//Mes
form.input_month.addEventListener("change", (e) => {
  monthExpiracion.textContent = e.target.value;
});

//Año
form.input_year.addEventListener("change", (e) => {
  yearExpiracion.textContent = e.target.value.slice(2);
});

//cvv con limitantes para que no coloquen espacios ni letras
form.input_cvv.addEventListener("keyup", (e) => {
  const valorinputcvv = e.target.value
  form.input_cvv.value = valorinputcvv
  //Eliminar espacios en blanco
    .replace(/\s/g, "")
  //Eliminar las letras
    .replace(/\D/g, "");
});

//Boton para evitar que la pagina se refresque y que me tome los datos del usuario
botonvalidar.addEventListener("click", (e) => {
  e.preventDefault();
  if(inputName.value !== "" && inputNumber.value !== "" && inputMonth.value !== "Mes" && inputYear.value !== "Año" && inputCvv.value !== "")
  {
    //Validar console.log(Number(inputNumber.value));
    const creditCardNumber = inputNumber.value;
    (validator.isValid(creditCardNumber));
    if(validator.isValid(creditCardNumber) === true){
      alert("Gracias por tu donacion, los datos de tu tarjeta son correctos");
    }
    else
      alert("Datos de tu tarjeta no validos");

    (validator.maskify(creditCardNumber));
  //inputNumber.value = creditCardNumber.finalCreditcard;
  }
  else 
    alert("Favor de verificar los campos vacios");
})


