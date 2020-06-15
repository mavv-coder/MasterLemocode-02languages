console.log("************** CHALLENGE 04 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * TRAZAS POR CONSOLA *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Ejecuta el siguiente código.
 * Las trazas resultante en consola son:
 * first;
 * second;
 * third;
 * El ejercicio consiste en reordenar las trazas para que se muestren invertidas, es 
 * decir, con el siguiente orden:
 * third;
 * second;
 * first;
 * Pero para ello tan solo podrás modificar la función `run`. Queda prohibido modificar 
 * cualquier otro código asi como el contenido de `triggers`.
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const delay = <T>(ms: number): Promise<T> =>
  new Promise((resolve) => setTimeout(resolve, ms));

const showMessage = async ([time, message]: any[]) => {
  await delay(time);
  console.log(message);
};

const triggers = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

// 1- Posibilidad
// const run = (triggers: any[]): void => {
//   const third = triggers[0];
//   const second = triggers[1];
//   third();
//   setTimeout(() => {
//     second();
//   }, 200);
//   setTimeout(() => {
//     console.log("first");
//   }, 400);
// };

// 2- Posibilidad
const run = (triggers: any[]): Promise<void> => {
  async function innerRun() {
    (await triggers[0]()) + (await triggers[1]()) + console.log("first");
  }
  return innerRun();
};

run(triggers);
