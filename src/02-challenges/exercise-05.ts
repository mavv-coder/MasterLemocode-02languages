console.log("************** CHALLENGE 05 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * MEMOIZATION *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * APARTADO A:
 * Implementa un mecanismo de memoización para funciones costosas y tipalo con TypeScript.
 * La memoización optimiza sucesivas llamadas del siguiente modo:
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
type ExpensiveFunction<T> = () => T;

const expensiveFunction: ExpensiveFunction<number> = () => {
  console.log("Una única llamada");
  return 3.1415;
};

// const memoize = (fn: ExpensiveFunction<number>): ExpensiveFunction<number> => {
//   let cache: number = 0;

//   return () => {
//     if (cache !== 0) return cache;
//     cache = fn();
//     return cache;
//   };
// };

// const memoized = memoize(expensiveFunction);
// console.log(memoized()); // Una única llamada // 3.1415
// console.log(memoized()); // 3.1415
// console.log(memoized()); // 3.1415

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * MEMOIZATION *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * APARTADO B:
 * ¿Podrías hacerlo en una sola línea?
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
// const memoize = (fn) => () => (
//   fn.cache, fn.cache !== undefined ? fn.cache : (fn.cache = fn())
// );

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * MEMOIZATION *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * APARTADO C:
 * Contempla ahora la posibilidad de que la función a memoizar pueda tener argumentos. Por
 * simplicidad supongamos sólo argumentos primitivos: string , number o boolean y que no 
 * sean undefined. ¿Podrías hacer una versión aceptando argumentos? ¿Cómo la tiparías con 
 * TS?
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
type Primitive = boolean | number | string;
type RepeatTextFn = (repetitions: number, text: Primitive) => Primitive;

let count = 0;
const repeatText: RepeatTextFn = (repetitions, text) => (
  count++, `${text} `.repeat(repetitions).trim()
);

const memoize = (fn: RepeatTextFn): RepeatTextFn => {
  let cache = {};

  return (...args) => {
    let [repetitions, text] = args;

    if (typeof repetitions === "undefined" || typeof text === "undefined")
      return "Undefined arguments are not allowed";

    for (let prop in cache) {
      if (`${text}${repetitions}` === prop) return cache[prop];
    }

    cache[`${text}${repetitions}`] = fn(repetitions, text);
    return cache[`${text}${repetitions}`];
  };
};

const memoizedGreet = memoize(repeatText);

console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(memoizedGreet(1, "pam")); // pam
console.log(memoizedGreet(3, "chun")); // chun chun chun
console.log(count); // 2
