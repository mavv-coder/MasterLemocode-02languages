console.log("************** PRACTICE 07 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * INCLUDES *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * En ES7 ya existe una función de manejo de arrays llamada Array.includes() que indica
 * si un determinado valor figura entre los items de un array dado. Crea una función en
 * ES5 con el mismo comportamiento, es decir, una función que reciba un array y un valor
 * y devuelva un boolean indicando si el valor está dentro del array.
 * CHALLENGE:
 * El ejercicio anterior puede quedar simplificado si utilizas una función de los arrays
 * que devuelve el índice de un elemento dado.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
// const include = <T>(arr: T[], value: T): boolean => {
//   for (let i: number = 0; i < arr.length; i++) {
//     if (arr[i] === value) return true;
//   }
//   return false;
// };

// CHALLENGE - - - - - - - - - - (
const include = <T>(arr: T[], value: T): boolean =>
  arr.indexOf(value) === -1 ? false : true;

console.log(include(["hola", "hello", "hallo"], "hallo"));
console.log(include([2, 5, 6], 3));
