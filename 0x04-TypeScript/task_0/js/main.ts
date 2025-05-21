interface student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: student = {
    firstName: "Omar",
    lastName: "Mohamed",
    age: 29,
    location: "Cairo"
};

const studentsList: student[] = [student1, student2];


const table = document.createElement('table');
const header = document.createElement('thead');
const body = document.createElement('tbody');
const row = document.createElement('tr');
const heading1 = document.createElement('th');
const heading2 = document.createElement('th');
const heading3 = document.createElement('th');
const heading4 = document.createElement('th');
const heading5 = document.createElement('th');
const cell1 = document.createElement('td');
const cell2 = document.createElement('td');
const cell3 = document.createElement('td');
const cell4 = document.createElement('td');
const cell5 = document.createElement('td');
const cell6 = document.createElement('td');
const cell7 = document.createElement('td');
const cell8 = document.createElement('td');
const cell9 = document.createElement('td');
const cell10 = document.createElement('td');    

heading1.textContent = "FirstName";
heading2.textContent = "Location";
heading3.textContent = "Age";
row.appendChild(heading1);
row.appendChild(heading2);
row.appendChild(heading3);
header.appendChild(row);
table.appendChild(header);

for (const student of studentsList) {
    const row = document.createElement('tr');
    const cell1 = document.createElement('td');
    const cell2 = document.createElement('td');
    const cell3 = document.createElement('td');

    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
    cell3.textContent = student.age.toString();
    
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    body.appendChild(row);
}
table.appendChild(body);
document.body.appendChild(table);