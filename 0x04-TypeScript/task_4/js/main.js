"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentsList = void 0;
exports.renderStudentsTable = renderStudentsTable;
exports.studentsList = [
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
function renderStudentsTable(students) {
    var table = document.createElement('table');
    var thead = document.createElement('thead');
    var headerRow = document.createElement('tr');
    var headers = ["First Name", "Location", "Age", "Last Name"];
    headers.forEach(function (text) {
        var th = document.createElement('th');
        th.textContent = text;
        headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);
    var tbody = document.createElement('tbody');
    students.forEach(function (student) {
        var row = document.createElement('tr');
        var firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        var locationCell = document.createElement('td');
        locationCell.textContent = student.location;
        var ageCell = document.createElement('td');
        ageCell.textContent = student.age.toString();
        var lastNameCell = document.createElement('td');
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
