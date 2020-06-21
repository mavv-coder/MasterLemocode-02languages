console.log("************** PRACTICE 14 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * FIBONACCI **
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Implementa una función para calcular el enenésimo termino de la sucesión de Fibonacci.
 * Esta sucesión tiene sus dos primeros términos prefijados:
 * fib(0) = 0
 * fib(1) = 1
 * Y a partir de aqui, el siguiente término se calcula a partir de los dos anteriores:
 * fib(2) = fib(1) + fib(0)
 * fib(n + 1) = fib(n) + fib(n - 1)
 * Es el clásico problema donde el término siguiente depende del actual y el anterior.
 * También se puede abordar con recursividad, pero buscamos una solución iterativa para
 * hacer uso de destructuring con múltiples asignaciones.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const fib = (n: number): number | string => {
  let firstNum: number = 0;
  let secondNum: number = 1;
  if (n > 1) {
    for (let i = 2; i < n; i++) {
      [firstNum, secondNum] = [secondNum, firstNum + secondNum];
    }
    return secondNum;
  }
  return "Insert a number above 1";
};

// 0 1 1 2 3 5 8 13 21 34 55
console.log(fib(5));
