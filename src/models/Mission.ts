export enum MissionType {
    Main = "Main", //Mision principal
    Side = "Side", //Mision secundaria
    Event= "Event", // Mision de evento
  }

export class Mission {
    private _description: string;
    private _difficulty: number;
    private _reward: number;
    

    constructor(description: string, difficulty: number, reward: number) {
        this._description = description;
        this._difficulty = difficulty;
        this._reward = reward;
        
    }
    public get description(): string {
        return this._description
    }
    public get difficulty(): number {
        return this._difficulty
    }
    public get reward(): number {
        return this._reward
    }
}