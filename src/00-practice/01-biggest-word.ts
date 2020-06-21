console.log("************** PRACTICE 01 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * BIGGEST WORD **
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Crea una función que reciba una frase en formato string y devuelva la palabra más
 * larga. En caso de haber varias con longitud máxima que devuelva siempre la primera. Ten
 * en cuenta que consideramos una palabra a aquello que esté separado por espacios.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const biggestWord = (str: string): string => {
  const newArr: string[] = str.split(" ");
  let biggestW: string = newArr[0];
  newArr.forEach((el: string) => {
    if (el.length > biggestW.length) biggestW = el;
  });
  return biggestW;
};

console.log(biggestWord("Esta frase puede contener muchas palabras")); // "contener"
console.log(biggestWord("Ejercicios básicos de JavaScript")); // "Ejercicios"
