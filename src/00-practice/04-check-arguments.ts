console.log("************** PRACTICE 04 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * CHECK ARGUMENTS **
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Convierte el siguiente código en algo más compacto y expresivo:
 * function f(input) {
 * var result;
 * if (input === undefined) {
 * result = "Unknown";
 * } else if (input === null) {
 * result = "";
 * } else {
 *  result = input;
 * }
 * return result;}
 * Piensa en el operador ternario y también en el operador OR.
 * Puedes suponer que input es siempre de tipo string, incluyendo null o undefined. Es
 * decir, no vas a recibir números, objetos, etc.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const checkArguments = (input: string): string =>
  input === undefined ? "Unknown" : input === null ? "" : input;

console.log(checkArguments("Hola"));
console.log(checkArguments(undefined));
console.log(checkArguments(null));
