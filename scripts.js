// let kartukiekis = 0;

// while (kartukiekis <= 1) {

// console.log(kartukiekis)
// kartukiekis++;
// }

// do {
// console.log(kartukiekis)
// kartukiekis++;
// } while (kartukiekis < 3);

//  console.log("pabaiga");
// do {
//     console.log(kartukiekis)
//     kartukiekis--;
//     } while (kartukiekis > 0);
    
//     console.log("end");   

// for (let i = 0; i < 2; i++) {
//     console.log (i);
// }
// const norimasCikluSkaicius = 3;
// let cikluSkaicius = 1;

// while (cikluSkaicius < norimasCikluSkaicius ) {
//     alert ("ciklas: " + cikluSkaicius);
//     cikluSkaicius++;
//     console.log (cikluSkaicius)
// }
//##### PIRMAS VARIANTAS###
//  const tiesa = 69;
//  let spejimas = prompt("Atspek skaiciu");

//  while (spejimas != tiesa) {
//      if (spejimas > tiesa) {
//         alert ("Per aukstai");
//     } else {alert("per mazai");
// }
//    spejimas = prompt("Atspek skaiciu");

//  }
//  alert("Atspejai");

 const tiesa = 69;
 let spejimas;

 do  {
     spejimas = prompt("Atspek skaiciu");
     if (spejimas > tiesa && spejimas != tiesa) {
        alert ("Per aukstai");
    } else {alert("per mazai");
}
       } while (spejimas != tiesa);
       
// if ( spejimas > tiesa) {
//     alert ("Per aukstai");}

 alert("Atspejai");
