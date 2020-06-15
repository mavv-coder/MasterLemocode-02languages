console.log("************** DELIVERABLE 03 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * CLONE *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Implementa una función clone que, a partir de un objeto de entrada source devuelva un 
 * nuevo objeto con las propiedades de source :
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
interface User {
  name: string;
  surname?: string;
  age?: number;
  country?: string;
  married?: boolean;
}

let user: User = { name: "Miguel Ángel", age: 31 };

const clone = ({ ...source }: User): User => source;

const clonedUser = clone(user);

console.log(user); // Objeto original
console.log(clonedUser); // Objeto clonado
user.name = "Pedro"; // Modificación objeto original
console.log(user); // Objeto original modificado
console.log(clonedUser); // Objeto clonado sin modificar

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * MERGE *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Implementa una función merge que, dados dos objetos de entrada source y target, 
 * devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso 
 * de propiedades con el mismo nombre, source sobreescribe a target.
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const a: User = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b: User = { name: "Luisa", age: 31, married: true };

const merge = (source: User, target: User): User => ({ ...target, ...source });

console.log(merge(a, b));
