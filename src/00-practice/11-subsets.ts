console.log("************** PRACTICE 11 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * SUBSETS *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Escribe una función que acepte un string como argumento y devuelva todas las partes
 * finales de dicha palabra:
 * CHALLENGE:
 * Repite el ejercicio anterior sin utilizar arrays auxiliares ni bucles for/do/while.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const subsets = (word: string): string[] => {
  let cache: string[] = [];
  let index = -1;

  function addWord(word: string, n: number) {
    if (Math.abs(word.length) === Math.abs(n)) {
      return cache;
    } else {
      cache.unshift(word.slice(index));
      index--;
      return addWord(word, index);
    }
  }

  return addWord(word, index);
};

console.log(subsets("message")); // ["essage", "ssage", "sage", "age", "ge", "e"]
