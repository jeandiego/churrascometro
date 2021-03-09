// Carne - 400 g por pessoa, se o churrasco durar mais de 6 horas 650g por pessoas.

// Cerveja - 1200 ml por pessoa, 
// se o churrasco durar mais de 6 horas 2000 ml por pessoal.

// Refrigerante/agua - 1000 ml por pessoa, 
// se o churrasco durar mais de 6 horas 1500 ml por pessoal.

// Criança equivale a 1/2 pessoa.


let inputAdults = document.getElementById("adults");


let inputKids = document.getElementById("kids");


let inputTime = document.getElementById("time");


let inputFields = document.getElementById("calculatorContainer")
let results = document.getElementById("calculatorResults")


function calculate() {
  console.log("Calculando...")

  let adults = inputAdults.value;
  let kids = inputKids.value;
  let time = inputTime.value

  let totalMeat = meatPerPerson(time) * adults + (meatPerPerson(time) / 2 * kids);
  let totalBeer = beerPerPerson(time) * adults;
  let totalDrink = drinkPerPerson(time) * adults + (drinkPerPerson(time) / 2 * kids);
  
  inputFields.classList.replace("show", "hide");
  results.classList.replace("hide","show");

  // console.log(totalMeat, totalBeer, totalDrink);
}

function meatPerPerson(time) {
  if (time >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function beerPerPerson(time) {
  if (time >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function drinkPerPerson(time) {
  if (time >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}

function reCalculate() {
  inputFields.classList.replace("hide", "show");
  results.classList.replace("show","hide");

  console.log("Recalculando")
}
