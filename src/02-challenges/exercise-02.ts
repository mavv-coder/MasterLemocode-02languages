console.log("************** CHALLENGE 02 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ACCESO EN PROFUNDIDAD  *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * APARTADO A:
 * Implementa un mecanismo deepGet para acceder en profundidad a objetos anidados, de modo
 * que podamos recuperar una propiedad en cualquiera de sus niveles. 
 * Recibe el objeto y la propiedad a la cual se quiere acceder
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: "bingo",
      },
    },
  },
};

// 1 - Posibilidad
// const deepGet = (obj, ...arg) => {
//   let n = arg.length;
//   let i = 0;
//   function getValues(obj, arg, n) {
//     if (n === 0) return obj;
//     for (let prop in obj) {
//       if (prop === arg[i]) {
//         n--;
//         i++;
//         return getValues(obj[prop], arg, n);
//       }
//     }
//   }
//   return getValues(obj, arg, n);
// };

// 2 - Posibilidad
const deepGet = (obj, ...arg) => {
  if (arg.length === 0) return obj;
  const [head, ...tail] = arg;
  for (let prop in obj) {
    if (prop === head) return deepGet(obj[prop], ...tail);
  }
};

// console.log(deepGet(myObject, "x")); // undefined
// console.log(deepGet(myObject, "a")); // 1
// console.log(deepGet(myObject, "b")); // { c: null, d: {....}}
// console.log(deepGet(myObject, "b", "c")); // null
// console.log(deepGet(myObject, "b", "d", "f", "g")); // bingo
// console.log(deepGet(myObject)); // {a: 1, b: {...}}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ACCESO EN PROFUNDIDAD  *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * APARTADO B:
 * Ahora implementa el complementario, deepSet , que permita guardar valores en 
 * profundidad.
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const myObject2 = {};

const deepSet = (value, obj, ...arg) => {
  if (arg.length === 0) return false;
  const [head, ...tail] = arg;
  if (arg.length > 1) {
    obj[head] = obj[head] || {};
    const prop = obj[head];
    return deepSet(value, prop, ...tail);
  } else {
    obj[head] = value;
  }
};

console.log("- - - - - - - - - - - - - ");
deepSet(1, myObject2, "a", "b");
console.log(JSON.stringify(myObject2)); // {a: { b: 1}}
deepSet(2, myObject2, "a", "c");
console.log(JSON.stringify(myObject2)); // {a: { b: 1, c: 2}}
deepSet(3, myObject2, "a");
console.log(JSON.stringify(myObject2)); // {a: 3}
deepSet(4, myObject2);
console.log(JSON.stringify(myObject2)); // Do nothing // {a: 3}
