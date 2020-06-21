console.log("************** PRACTICE 05 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * DICES **
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * Empleando el concepto de closure, emula el comportamiento de 2 dados.
 * Utiliza un closure para almacenar el resultado de tirar 2 dados, y encapsula junto a
 * estos datos, métodos que implementen la siguiente funcionalidad:
 * - Hacer reset, poner a undefined o null ambos resultados.
 * - Tirar los dados. Usa Math.random() para tiradas aleatorias.
 * - Imprimir el resultado por consola. Ten en cuenta lo siguiente:
 *    - Informa al usuario que debe tirar primero cuando corresponda.
 *    - Si saca doble 6, ¡dale un premio!
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
type voidFnc = () => void;

interface dicesClosureReturn {
  rollDices: voidFnc;
  resetDices: voidFnc;
  showDices: voidFnc;
}

const dicesClosure = (): dicesClosureReturn => {
  const dices: number[] = [undefined, undefined];
  const getValue = (): number => Math.ceil(Math.random() * 6);

  return {
    rollDices: function (): void {
      dices.forEach((dice: number, i: number) => (dices[i] = getValue()));
    },
    resetDices: function (): void {
      dices.forEach((dice: number, i: number) => (dices[i] = undefined));
    },
    showDices: function (): void {
      if (dices[0] === undefined && dices[1] === undefined) {
        console.log(
          "Please, you must roll the dices before show their results!"
        );
      } else {
        dices.forEach((dice: number, i: number) => {
          console.log(`${i + 1} Dado: ${dice}`);
        });
        if (dices[0] === 6 && dices[1] === 6)
          console.log(`Congratulations, you get an extra shot!`);
      }
    },
  };
};

const dices = dicesClosure();

dices.showDices();
dices.rollDices();
dices.showDices();
