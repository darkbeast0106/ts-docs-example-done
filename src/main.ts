import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { PersonService } from "./Person/PersonService";

const personService = new PersonService();

document.addEventListener("DOMContentLoaded", () => {
  listPeople();
  document.getElementById("personForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    addPerson();
  });
});

async function listPeople() {
  const peopleTable = document.getElementById("people") as HTMLTableElement;
  peopleTable.textContent = "";
  const people = await personService.getAll();
  const tableRows = people.map((person) => {
    const tr = document.createElement("tr");
    const idCol = document.createElement("td");
    const nameCol = document.createElement("td");
    const emailCol = document.createElement("td");
    const jobCol = document.createElement("td");
    idCol.textContent = person.id.toString();
    nameCol.textContent = person.name;
    emailCol.textContent = person.email;
    jobCol.textContent = person.job;
    tr.append(...[idCol, nameCol, emailCol, jobCol]);
    return tr;
  });
  peopleTable.append(...tableRows);
}

async function addPerson() {
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const jobInput = document.getElementById("job") as HTMLInputElement;
  const name = nameInput.value;
  const email = emailInput.value;
  const job = jobInput.value;

  const person = {
    name: name,
    email: email,
    job: job,
  };
  await personService.add(person);
  nameInput.value = "";
  emailInput.value = "";
  jobInput.value = "";
  listPeople();
}
