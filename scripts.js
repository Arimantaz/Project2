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

//  const tiesa = 69;
//  let spejimas;

//  do  {
//      spejimas = prompt("Atspek skaiciu");
//      if (spejimas > tiesa && spejimas != tiesa) {
//         alert ("Per aukstai");
//     } else {alert("per mazai");
// }
//        } while (spejimas != tiesa);
       
// // if ( spejimas > tiesa) {
// //     alert ("Per aukstai");}

//  alert("Atspejai");


// function lyginiaiSkaiciai(ikiSk) {
//     for (let i = 2 ; i <= ikiSk; i++) {
//         const liekana = i % 2;
//         if (liekana !== 0) {
//             continue;
            
//         }
//         console.log (i) 
// }}
// lyginiaiSkaiciai(10)

// const kaina = 5.33;
// const puodeliuKiekis = prompt ("Kiek pirksite kavos?");
// let suma = 0  
// for (let i = 0; i < puodeliuKiekis; i++) {
// suma = suma + kaina;

//      }
     


    // for (let puodelis = 1; puodelis <= puodeliuKiekis; puodelis++) {
    //    const cukrausKiekis = prompt (`Kiek sauksteliu cukraus ${puodelis} puodelyje?`);
    //    for (let cukrus = 1; cukrus <= cukrausKiekis; cukrus++){
    //     const sakinys = `Pilu ${cukrausKiekis} šaukštelius cukraus į ${puodelis} puodelį`;
    //     console.log(sakinys);
    // }
        
       
    //     suma = suma + kaina;

    // }
    //  alert (`Suma ${suma} eur`);



//    const vardai = ["Jonas",
//     "Petras",
//     "Aurimas"
//  ];

// while (vardai.length > 0) {
//     vardai.pop();
//     vardai.push ()
// //     console.log(vardai)
// }
//vardai.length = 0; istrina vardus
   //console.log (vardai.length); saraso ilgis
   //console.log (vardai [1]); norimas vardas

//    const masyvas = [
//        "ciklas 1",
//        "ciklas 2",
//        "ciklas 3"
//    ]
//    while (masyvas.length > 0) {
//        masyvas.shift();
//    }
//    console.log (masyvas)

//    const vardai = ["Jonas",
//     "Petras",
//     "Aurimas"
//  ];

// const istrintiVardai = vardai.splice(0, 2, "Vytautas");
// console.log (vardai);
// console.log (istrintiVardai);


// const lielemntas = document.querySelector("li");
// for (let i = 0; i < lielemntas.lenght; i++)
// console.log(lielemntas);

const vardai = [ ];

    vardai.push ("Arimantas");
  vardai.unshift("Aurimas");
  console.log (vardai);
  vardai.pop();
  vardai.push("Tomas");
    console.log (vardai);
vardai.splice(vardai.length --, 1);
console.log (vardai);