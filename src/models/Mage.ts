import { Character } from "./Character";


export class Mage extends Character {
    magicPower: number; //Cantidad de poder para lanzar hechizos
    mana: number; //recursos disponibles para lanzar hechizos.

    constructor(name: string, level: number, health: number, magicPower: number, mana: number) {
        super(name, level, health);  // Llamada al constructor de la clase base
        this.magicPower = magicPower;
        this.mana = mana;
    }

// Método específico para el Mage
  castSpell() {
    console.log(`${this.name} lanza un hechizo con ${this.magicPower} de poder mágico.`);
  }
}
