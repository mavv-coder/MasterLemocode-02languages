console.log("************** PRACTICE 17 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * SWAP *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ¿Sabrías intercambiar el valor de estas 2 variables en una sola línea?
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
let aa: string = "A";
let bb: string = "B";

[aa, bb] = ["B", "A"];

console.log(aa === "B" && bb === "A" ? "You did it!" : "Keep trying!");
