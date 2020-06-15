console.log("************** PRACTICE 03 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * QUALIFICATIONS *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Dada la calificación de alumnos de una clase en forma de objeto como el siguiente.
 * Implementa una función que muestre la media de la clase de forma textual, es decir,
 * siguiendo el sistema de calificación español.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
interface Eso2o {
  David: number;
  Maria: number;
  Jose: number;
  Juan: number;
  Blanca: number;
  Carmen: number;
}

const eso2o: Eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8,
};

const getGrade = (grade: number): string => {
  if (grade >= 0 && grade < 4) {
    return "Muy deficiente";
  } else if (grade >= 4 && grade < 5) {
    return "Insuficiente";
  } else if (grade >= 5 && grade < 6) {
    return "Suficiente";
  } else if (grade >= 6 && grade < 7) {
    return "Bien";
  } else if (grade >= 7 && grade < 9) {
    return "Notable";
  } else if (grade >= 9 && grade < 10) {
    return "Sobresaliente";
  } else if (grade === 10) {
    return "Matrícula de honor";
  } else {
    return undefined;
  }
};

const calcQualifications = (obj: Eso2o): number => {
  const qualifications: number[] = Object.values(obj);
  const totalSum: number = qualifications.reduce(
    (counter: number, el: number) => (counter += el),
    0
  );
  return totalSum / qualifications.length;
};

const printAverage = (obj: Eso2o): string => getGrade(calcQualifications(obj));

console.log(`La nota final de la clase es: ${printAverage(eso2o)}`);
