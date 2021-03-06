console.log("************** CHALLENGE 01 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * APLANANDO ARRAYS **
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Dado un array multidimensional, construye una función inmutable que devuelva el mismo 
 * array aplanado, esto es, con un único nivel de profundidad. Por ejemplo, el siguiente 
 * array.
 * Suponiendo que los arrays multidimensionales del ejercicio anterior no serán de 
 * naturaleza mixta, es decir, sus elementos siempre serán del mismo tipo ¿Serías capaz de
 * proporcionar un tipado adecuado a dicha función de aplanamiento?
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
type MultiArray<T> = MultiArray<T>[] | T;

const sample: MultiArray<number> = [1, [2, 3], [[4], [5, [6]]], [7, [8, [9]]]];

type FlatFn = (arr: MultiArray<number>) => number[];

// He tenido que meter este tipo para forzar el casting de la fn inferior porque me daba
// dos errores. No sé si habría una forma más limpia de hacer esto.
type X = number;

const flat: FlatFn = (arr) =>
  (arr as X[]).some((el: MultiArray<number>) => Array.isArray(el))
    ? flat([].concat(...arr))
    : (arr as X[]);

console.log(flat(sample));
