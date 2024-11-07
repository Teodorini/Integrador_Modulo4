import { Character } from "./Character";


export class Warrior extends Character {
    attack: number;
    defense: number;

    constructor(name: string, level: number, health: number, attack: number, defense: number) {
        super(name, level, health);
        this.attack = attack;
        this.defense = defense; 
    }
// Método específico para el Warrior
  defend() {
    console.log(`${this.name} está defendiendo con ${this.defense} puntos de defensa.`);
  }
}