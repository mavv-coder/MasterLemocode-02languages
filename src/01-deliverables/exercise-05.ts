console.log("************** DELIVERABLE 05 *********************");
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * SLOT MACHINE **
 * - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
 * El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde 
 * cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) 
 * tendrá un contador de monedas que automáticamente se irá incrementando conforme 
 * vayamos jugando. Cuando se llame al método play el número de monedas se debe 
 * incrementar de forma automática y debe generar tres booleanos aleatorios que 
 * representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los 
 * tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
 * Congratulations!!!. You won <número de monedas> coins!!";
 * y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la 
 * máquina. En caso contrario deberá mostrar otro mensaje: "Good luck next time!!".
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
class SlotMachine {
  private coins: number;
  private results: boolean[];

  constructor() {
    this.coins = 0;
    this.results = [];
  }

  private addCoin(): void {
    this.coins++;
  }

  private resetCoins(): void {
    this.coins = 0;
  }

  private getRandomBoolean(): boolean {
    return Math.random() >= 0.5;
  }

  private addResults(): void {
    this.results.push(this.getRandomBoolean());
    this.results.push(this.getRandomBoolean());
    this.results.push(this.getRandomBoolean());
  }

  private resetResults(): void {
    this.results = [];
  }

  private checkResults(): boolean {
    return this.results[0] && this.results[1] && this.results[2] ? true : false;
  }

  private printResult(): void {
    if (this.checkResults()) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!"`);
      this.resetCoins();
    } else {
      console.log(`Good luck next time!!`);
    }
  }

  public play(): void {
    this.addCoin();
    this.addResults();
    this.printResult();
    this.resetResults();
  }
}

const slotMachine = new SlotMachine();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
