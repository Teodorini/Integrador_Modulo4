// Clase para representar a un personaje en el juego
export class Character {
    public name: string;
    public level: number;
    public health: number;
    public experience: number;
    public inventory: string[];

 // Constructor que inicializa los atributos del personaje
    constructor(name: string, level: number, health: number, experience: number, inventory: string[]) {
        this.name = name;
        this.level = level;
        this.health = health;
        this.experience = experience
        this.inventory = inventory
    }
  // Metodo para añadir un item al inventario
  addItem(item: string): void {
    this.inventory.push(item);
  }

   // Método para eliminar un ítem del inventario. Devuelve un booleano si el ítem fue eliminado correctamente
    removeItem(item: string): boolean {
        const index = this.inventory.indexOf(item);
        if (index !== -1) {
          this.inventory.splice(index, 1);
          return true;
        }
        return false;
      }
    }
