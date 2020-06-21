console.log("************** DELIVERABLE 01 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
* HEAD **
* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
* Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y
* devuelva su primer elemento. Utiliza destructuring.
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const fruits: string[] = ["Banana", "Peach", "Watermelon", "Strawberry"];

const head = <T>([first, ...rest]: T[]): T => first;

console.log(head(fruits));
console.log(fruits); // No muta original

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * TAIL **
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Implementa una función tail (inmutable), tal que, dado un array como entrada devuelva 
 * todos menos el primer elemento. Utiliza rest operator.
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const num: number[] = [1, 2, 3, 4, 5, 6];

const tail = <T>([first, ...rest]: T[]): T[] => rest;

console.log(tail(num));
console.log(num); // No muta original

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * INIT **
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Implementa una función init (inmutable), tal que, dado un array como entrada devuelva 
 * todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const sports: string[] = ["climbing", "football", "tennis", "basketball"];

const init = <T>(arr: T[]): T[] =>
  arr.filter((el, i) => {
    if (i !== arr.length - 1) return el;
  });

console.log(init(sports));
console.log(sports); // No muta original

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * LAST **
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Implementa una función last (inmutable), tal que, dado un array como entrada devuelva 
 * el último elemento.
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const italianFood: string[] = ["spaghetti", "pizza", "envoltini", "gelatto"];

const last = <T>([...all]: T[]): T => all[all.length - 1];

console.log(last(italianFood));
console.log(italianFood); // No muta original
