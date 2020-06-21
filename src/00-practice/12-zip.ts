console.log("************** PRACTICE 12 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ZIP **
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Crea una función zipObject tal que acepte un array de claves como primer argumento y
 * un array de valores como segundo argumento y cuyo objetivo sea crear un objeto uniendo
 * las claves con sus valores. Asumir que el array de claves tiene como mínimo la misma
 * longitud que el de valores:
 * CHALLENGE:
 * Si no hay valores suficientes para todas las claves evita que aparezcan como undefined.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const zipObject = (keys: string[], values: string[]): {} => {
  let result = {};
  for (let i = 0; i < keys.length; i++) {
    if (values[i] !== undefined) result[keys[i]] = values[i];
  }
  return result;
};

console.log(
  zipObject(["spanish", "english", "french", "german"], ["hola", "hi", "salut"])
); // {spanish: "hola", english: "hi", french: "salut"}
