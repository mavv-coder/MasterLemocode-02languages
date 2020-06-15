console.log("************** PRACTICE 10 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * THIS *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * ¿Cual es la salida de los logs en el siguiente código? Intenta razonar, no te limites a
 * ejecutar la solución.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
type GetSurname = () => string;

interface Member {
  name: string;
  surname: string;
  wife?: Member;
  husband?: Member;
  getSurname?: GetSurname;
}

var surname: string = "Pérez";
var person: Member = {
  name: "Juan",
  surname: "González",
  wife: {
    name: "Ana",
    surname: "Jiménez",
    getSurname: function () {
      return this.surname;
    },
  },
};

console.log(person.wife.getSurname());
var surnameFunction = person.wife.getSurname;
// console.log(surnameFunction());
console.log(surnameFunction.call(person));
