console.log("************** PRACTICE 09 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * REVERSE TEXT **
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Dado un texto cualquiera, invierte el orden de las palabras.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const phrase: string = "uno dos tres";

const reverseText = (str: string): string => str.split(" ").reverse().join(" ");

console.log(reverseText(phrase));
console.log(phrase);
