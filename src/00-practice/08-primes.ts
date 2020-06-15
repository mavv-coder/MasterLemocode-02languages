console.log("************** PRACTICE 08 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * PRIMES *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Crea una función tal que, dado un número entero de inicio from y otro de fin to,
 * encuentre los números primos entre ellos y los muestre por pantalla.
 * La salida del 1 al 10 sería:
 * 1 is not a prime
 * 2 is PRIME!
 * 3 is PRIME!
 * 4 is not a prime
 * 5 is PRIME!
 * 6 is not a primer
 * 7 is PRIME!
 * 8 is not a prime
 * 9 is not a prime
 * 10 is not a prime
 * Utiliza la función para explorar todos los primos hasta el 100.
 * Puedes crearte una función auxiliar para saber si un número es primo o no, y utilizarla
 * en tu función principal. Es buena práctica crear funciones auxiliares que hagan una
 * sola cosa (principio de única responsabilidad).
 * CHALLENGE:
 * Se puede mejorar mucho el rendimiento del ejercicio anterior.
 * Al buscar si un numero es primo, podemos dejar de comprobar si es divisible por cada
 * entero mayor que 1 una vez alcancemos la raiz cuadrada de dicho número.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
const isPrime = (num: number): boolean => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
    if (i === Math.round(Math.sqrt(num))) break;
  }
  return true;
};

const showPrimes = (from: number, to: number): void => {
  for (let i = from; i <= to; i++) {
    console.log(isPrime(i) ? `${i} is PRIME!` : `${i} is not a prime`);
  }
};

showPrimes(1, 100);
