console.log("************** PRACTICE 20 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * MORSE *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * DESCRIPCIÓN:
 * El ejercicio consiste en, dado cualquier mensaje de entrada, representar por consola el
 * estado de las señales morse que resultan de transmitir dicho mensaje. Para facilitarte
 * la tarea piensa en la típica bombilla de un transmisor morse:
 *  - Cuando recibe un punto, se enciende brevemente.
 *  - Cuando recibe una raya, se enciende más prolongadamente.
 *  - El tiempo que la bombilla permance apagada ayuda a discernir la separación entre
 *    letras y también entre palabras.
 * Por tanto, la salida por consola será una sucesión de estados: ON/OFF,
 * Encendido/Apagado, 1/0, como prefieras.
 * IMPLEMENTACIÓN:
 * Para ello tendremos que implementar una factoría de transmisores. Recuerda que una
 * factoría es una función que devuelve un objeto o clase. Esa decisión es tuya. La
 * entidad transmisor podrá ser objeto o clase, como prefieras. Esta factoría necesita una
 * serie de "ingredientes" para configurar el transmisor:
 *  - Un mapa que traduzca de carácter a su representación morse. Sírvete del objeto
 *    auxiliar morseAlphabet que se adjunta más abajo.
 *  - Una función que implemente un mecanismo de timeout para espaciar los símbolos a
 *    transmitir. Este mecanismo será como un setTimeout con la diferencia de que en lugar
 *    de tomar milisegundos como entrada, será el número de puntos a esperar. Un punto,
 *    como explicaremos más abajo, es la unidad temporal básica de referencia.
 *  - Un función writer que será la encargada de escribir por consola el estado de nuestra
 *    bombilla. Usa ON/OFF, 1/0 o lo que prefieras.
 *  - Un callback para cuando el mensaje se haya terminado de transmitir completamente. La
 *    entidad transmisor deberá tener una función para transmitir el mensaje deseado, que
 *    admita dicho mensaje como parámetro.
 * TIMING:
 * La unidad temporal de referencia será la duración de 1 punto en lugar de trabajar en
 * milisegundos. La duración real en ms. de dicho punto es a tu elección, puede ser de
 * 50ms o de 1seg. si estás haciendo pruebas y quieres ir despacio. Dicho esto deberás
 * saber que, en morse:
 *  - La duración de 1 punto es la referencia temporal.
 *  - Las rayas duran 3 puntos.
 *  - La separación entre cada punto o cada raya es también de 1 punto.
 *  - La separación entre letras es de 3 puntos.
 *  - La separación entre palabras es de 7 puntos.
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
interface ReturnObj {
  translate: () => void;
  timeOut: (Arr: string[]) => void;
  writer: (x: string) => void;
}

const message: string = "SOS SOS";

const transistorFactory = (morseMsg: string, endMsg: string): ReturnObj => {
  const morseAlphabet = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
  };

  return {
    /* El objetivo de la función translate sería elaborar un array compuesto de . y /
     * teniendo en cuenta el mensaje entrante. De esta forma, se obtiene una colección
     * en dicho array que puede recorrerse asignando al punto el valor 1 y a la barra
     * el valor 0. */
    translate: function () {
      const msgArr = Array.from(morseMsg.toLowerCase());
      let result = "";
      msgArr.forEach((el) => {
        if (el === " ") result += "////";
        for (let key in morseAlphabet) {
          if (key === el)
            result += Array.from(morseAlphabet[key]).join("/") + "///";
        }
      });
      result = result.slice(0, -3);
      let resultArr = Array.from(result).map((el) => (el === "-" ? "..." : el));
      resultArr = Array.from(resultArr.join(""));
      this.timeOut(resultArr);
    },

    timeOut: async function (resultArr) {
      for (let i = 0; i < resultArr.length; i++) {
        const ch = await new Promise((resolve) => {
          setTimeout(function () {
            resolve(resultArr[i]);
          }, 500);
        });
        this.writer(ch);
      }
      console.log(endMsg);
    },

    writer: function (ch) {
      console.log(ch === "." ? "1" : "0");
    },
  };
};

const initMorse = transistorFactory(message, "Transmission completed!");
initMorse.translate();
