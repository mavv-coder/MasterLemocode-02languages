console.log("************** PRACTICE 16 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * REMINDER *
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * El siguiente código implementa una sencilla clase que actúa como reminder, es decir,
 * dado un mensaje, lo muestra por consola transcurrido (al menos) el tiempo indicado por
 * el usuario.
 * Te animamos a que crees una nueva instancia de reminder y la utilices. Escribe el
 * mensaje que tu quieras y añade unos pocos segundos de retardo.
 * Comprueba la salida por consola ... algo no funciona como esperábamos ¿verdad? ¿Sabrías
 * decirnos que está pasando aquí? ¿Cómo lo arreglarías?
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
class Reminder {
  constructor(private text: string = text) {}

  public remindMe(delay: number): void {
    // setTimeout(function () {
    //   console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    // }, delay * 1000);
    setTimeout(() => {
      console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
    }, delay * 1000);
  }
}

const reminder = new Reminder("¡Espabila que llegas tarde!");
reminder.remindMe(2);
