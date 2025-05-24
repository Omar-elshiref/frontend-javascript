export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

export const studentsList: Student[] = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
  },
  {
    firstName: "Omar",
    lastName: "Mohamed",
    age: 29,
    location: "Cairo"
  },
  {
    firstName: "Ahmed",
    lastName: "Mohamed",
    age: 50,
    location: "Moscow"
  }
];

export function renderStudentsTable(students: Student[]): HTMLTableElement {
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  const headers = ["First Name", "Location", "Age", "Last Name"];

  headers.forEach(text => {
    const th = document.createElement('th');
    th.textContent = text;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  students.forEach(student => {
    const row = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement('td');
    locationCell.textContent = student.location;

    const ageCell = document.createElement('td');
    ageCell.textContent = student.age.toString();

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = student.lastName;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    row.appendChild(ageCell);
    row.appendChild(lastNameCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  return table;
}
