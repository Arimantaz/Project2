// const vardas = "Aurimas Stacenka";

// const raidziuSkaicius = vardas.length;
// const fullName = vardas.split ("");
// const vardasMazosiomis = vardas .toLower
// const vardasDidziosiomis = vardas.toUp
// const apkeistaRaide = vardasMazosiomis

const transliacija = `
 32   36   44 16  22      18     8   30   12      86   44
  54   10  64       6         60    84         2       98
40 20     32  44   10        4   172       4   108
     12 120 168    0 10   24        4 196     44   9 188 4
 7 16    18  22    8    11 9   4 15 6 43 22
27 5       32              3 30 42 1       49 20

10     16    22      5  2 86
2 54    6    60 84  0   5    12      2  98 22 40     74 4
`;

// Regekso panaudojimas \\\

// const masyvasSuTarpais = transliacija.split(/\s/gm);
// const svaresnisMasyvas = [];
//     for (let i= 0; i < masyvasSuTarpais.length; i++) {
//         const verte = masyvasSuTarpais[i];
//         if (verte !== "") {
//             console.log(verte);
//          svaresnisMasyvas.push(verte);}
//     }
// console.log(svaresnisMasyvas)
/////////////////////////////////////////////////////////////
const transliacijaBeNewLine = transliacija.replace('\n', ' ');
const masyvasSuTarpais = transliacijaBeNewLine.split(' ');
const svaresnisMasyvas = masyvoValytuvas(masyvasSuTarpais);

const skaiciuMasyvas = [];

for (let i = 0; i < svaresnisMasyvas.length; i++) {
  const masyvas = svaresnisMasyvas[i].split('\n');
  const isvalytasMasyvas = masyvoValytuvas(masyvas);

  for (let j = 0; j < isvalytasMasyvas.length; j++) {
    skaiciuMasyvas.push(isvalytasMasyvas[j]);
  }
}
const atsakymas = skaiciuMasyvas.slice(-40);

console.log(atsakymas);

function masyvoValytuvas(masyvasKuriReikiaIsvalyt) {
  const tikSkaiciai = [];

  for (let i = 0; i < masyvasKuriReikiaIsvalyt.length; i++) {
    if (masyvasKuriReikiaIsvalyt[i] === '') {
      //nedarom nieko
    } else {
      tikSkaiciai.push(masyvasKuriReikiaIsvalyt[i]);
    }
  }

  return tikSkaiciai;
}
