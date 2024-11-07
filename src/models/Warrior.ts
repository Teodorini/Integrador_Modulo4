import { Character } from "./Character";


class Warrior extends Character {
    attack: number;
    defense: number;

    constructor(attack: number, defense: number, name: string, level: number, health: number, experience: number, inventory: string[]) {
        super(name, level, health, experience, inventory);
        this.attack = attack;
        this.defense = defense; 


    }
}