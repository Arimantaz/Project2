// const vardas = promt ('koks tavo vardas?')
// console.log (vardas);

// const pirmaverte = '8';
// console.log (pirmaverte)
// const gautaverte = Number (pirmaverte)
// console.log (gautaverte)
// const x = prompt ('pinigai');

//  const y = 15
//  if (Number (x) > y) {
//     alert ("Jegele");} else if (Number (x)===y) {
//         alert ("reiks taupyt");
//     }
//     else {
//         alert ("Nieko gero!")
// }
// if ((x-5)< y) { alert ("blogai");}

// console.log ("operacija baigta");
// console.log (window)

// function vardugeneratorius (name, surname) {
//     return name + '' + surname;
// }
// const manopilnasvardas = vardugeneratorius ('Arimantas', 'Jurjonas')
// console.log (manopilnasvardas)

// function min (a, b) {
//     if (a < b) {
//     return a;
// } return b;}
// const atsakymas = min(7, 4)
// console.log (atsakymas)

// function sayHi (name) {
//     return 'Labas' + ' ' + name;
// }
// const vardas = sayHi('Arimantas');
// alert (vardas)

// function ketvirta (sum, bum) {
//     return sum + bum;
// }
// const atsakymas = ketvirta (2, 3);
// console.log (atsakymas)
// alert (atsakymas)

// const celcius = prompt ('Įveskite laipsnius ');
// const atsakymas = celciusToFarenheit (celcius);
// alert (atsakymas)

// function celciusToFarenheit (celcius) {
//     return celcius * 1.8 + 32;
// }
function multiplyValue() {
    const first = getElementNumberValue("first")
    const second = getElementNumberValue("second")
    const multiplyValue = first * second;
    writeResult(multiplyValue)
}
function divideValue() {
    const first = getElementNumberValue("first")
    const second = getElementNumberValue("second")
    const multiplyValue = first / second;
    writeResult(multiplyValue)
}


function getElementNumberValue(id) {
    const firstelemnt = document.getElementById(id);
    const valueAsString = firstelemnt.value;
    console.log(valueAsString)
    // const valueType = typeof value
    // console.log (valueType)
    const valueAsNumber = Number(valueAsString);
    console.log(typeof valueAsNumber)
    return valueAsNumber;
}
// multiplyValue()
function writeResult(result) {
    const resultParagraph = document.getElementById("result");
    resultParagraph.innerHTML = "Result is: " + result;

}
