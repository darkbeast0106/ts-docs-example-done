import Person from "./Person";
import { PersonDTO } from "./PersonDTO";

export class PersonService {
  api_url = "https://retoolapi.dev/78KAb0/people";

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

  async getAll(): Promise<Person[]> {
    const response = await fetch(this.api_url, {
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error("An error occured while listing people");
    }
    return response.json();
  }

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

  async delete(id: number): Promise<boolean> {
    const response = await fetch(`${this.api_url}/${id}`, {
      method: "DELETE",
      headers: { Accept: "application/json" },
    });
    if (!response.ok) {
      throw new Error("An error occured while adding deleting a person");
    }
    return response.json();
  }
}
