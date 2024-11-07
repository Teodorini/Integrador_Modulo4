// Clase para representar a un personaje en el juego
export class Character {
    private _name: string;
    private _level: number;
    private _health: number;
    private _experience: number;  
    private _inventory: string[];

 // Constructor que inicializa los atributos del personaje
    constructor(name: string, level: number, health: number, experience: number, inventory: string[]) {
        this._name = name;
        this._level = level;
        this._health = health;
        this._experience = experience
        this._inventory = inventory
    }
    public get name(): string {
      return this._name
    }

    public get level(): number {
      return this._level
    }

    public get health(): number {
      return this._health
    }

    public get experience(): number {
      return this._experience
    }

    public get inventory(): string[] {
      return this._inventory;
    }
  // Metodo para añadir un item al inventario
  addItem(item: string): void {
    this._inventory.push(item);
  }

   // Método para eliminar un ítem del inventario. Devuelve un booleano si el ítem fue eliminado correctamente
    removeItem(item: string): boolean {
        const index = this._inventory.indexOf(item);
        if (index !== -1) {
          this._inventory.splice(index, 1);
          return true;
        }
        return false;
      }
    }
