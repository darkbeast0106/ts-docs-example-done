import { Person } from "./Person";
import { PersonDTO } from "./PersonDTO";

/**
 * Emberekre valósít meg CRUD-ot. (Create Read Update Delete)
 * Az adatok forrása az api_url tagváltozóban található retool api.
 */
export class PersonService {
  /**
   * Az adatokat szolgáltató retool api backend urlje.
   */
  api_url = "https://retoolapi.dev/78KAb0/people";

  /**
   * Létrehoz egy új embert az adatbázisban.
   * @param person Az új ember adatai. Nem tartalmaz azonosítót.
   * @returns Létrehozott ember adatai. A szerver által generált azonosítót is tartalmazza.
   */
  async add(person: PersonDTO): Promise<Person> {
    const response = await fetch(this.api_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(person),
    });
    if (!response.ok) {
      throw new Error("An error occured while adding a new person");
    }
    return response.json();
  }

  /**
   * Lekérdezi az embereket a szerverről
   * @returns Embereket tartalmazó lista
   */
  async getAll(): Promise<Person[]> {
    const response = await fetch(this.api_url, {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error("An error occured while listing people");
    }
    return response.json();
  }

  /**
   * Módosít egy meghatározott embert az adatbázisban.
   * @param id A módosítandó ember azonosítója
   * @param person Az ember új adatai, azonosító nélkül.
   * @returns A módosított adatok azonosítóval együtt.
   */
  async update(id: number, person: PersonDTO): Promise<Person> {
    const response = await fetch(`${this.api_url}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(person),
    });
    if (!response.ok) {
      throw new Error("An error occured while adding updating a person");
    }
    return response.json();
  }

  /**
   * Töröl meghatározott embert az adatbázisból.
   * @param id Törlendő ember azonosítója
   * @returns Törlés sikeressége.
   */
  async delete(id: number): Promise<boolean> {
    const response = await fetch(`${this.api_url}/${id}`, {
      method: "DELETE",
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error("An error occured while adding deleting a person");
    }
    return true;
  }
}
