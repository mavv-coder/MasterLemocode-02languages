console.log("************** PRACTICE 06 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * HOISTING *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Escribe el código equivalente:
 * function f() {
 *  console.log(a);
 *  console.log(g());
 *  var a = "good job!";
 *   function g() {
 *    return a;
 *   }
 *   console.log(a);
 * }
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const f = (): void => {
  let a: string;
  const g = (): string => a;
  console.log(a);
  console.log(g());
  a = "good job!";
  console.log(a);
};

f();
