console.log("************** PRACTICE 02 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * VALUES *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Escribe una función que devuelva una lista de valores de todas las propiedades de un
 * objeto.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * CHALLENGE:
 * Evita añadir las propiedades heredadas en caso de ser instancia de una clase.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
type numStr = number | string;

interface Video {
  id: number;
  duration: number;
  name: string;
  format: string;
}

interface Person {
  name: string;
}

// const values = (obj: Video | Person): numStr[] => {
//   let result: numStr[] = [];
//   for (let pro in obj) {
//     result.push(obj[pro]);
//   }
//   return result;
// };

// console.log(
//   values({ id: 31, duration: 310, name: "long video", format: "mp4" })
// ); // [31, 310, "long video", "mp4"]

// CHALLENGE - - - - - - - - - - (
function Person(name: string) {
  this.name = name;
}

Person.prototype.walk = function (): void {
  console.log("I'm walking");
};

var john: Person = new Person("John");

const values = (obj: Video | Person): numStr[] => Object.values(obj);

console.log(values(john)); // ["John"]
