export class Mission {
    private _description: string;
    private _difficulty: number;
    private _reward: number;

    constructor(description: string, difficulty: number, reward: number) {
        this._description = description;
        this._difficulty = difficulty;
        this._reward = reward
    }
}