console.log("************** DELIVERABLE 02 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * CONCAT **
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, 
 * devuelva la concatenación de ambos. Utiliza rest / spread operators.
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const beers1: string[] = ["Mahou", "Voldamm", "Estrella Galicia"];
const beers2: string[] = ["Paulaner", "Alhambra", "Cruzcampo"];
const beers3: string[] = ["San Miguel", "Estrella Damm", "Amstell"];

const concat = <T>(a: T[], b: T[]): T[] => [...a, ...b];

console.log(concat(beers1, beers2));

// OPTIONAL - - - - - - - - - - (

// 1- Posibilidad
const concatMulti = <T>(...arrays: T[][]): T[] =>
  arrays.reduce((arr: T[], el: T[]): T[] => arr.concat(el), []);

// // 2- Posibilidad
// const concatMulti = (...arrays: string[][]): string[] =>
//   arrays.reduce((arr: string[], el: string[]): string[] => concat(arr, el), []);

console.log(concatMulti(beers1, beers2, beers3));
