var student1 = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};
var student2 = {
    firstName: "Omar",
    lastName: "Mohamed",
    age: 29,
    location: "Cairo"
};
var studentsList = [student1, student2];
var table = document.createElement('table');
var header = document.createElement('thead');
var body = document.createElement('tbody');
var row = document.createElement('tr');
var heading1 = document.createElement('th');
var heading2 = document.createElement('th');
var heading3 = document.createElement('th');
var heading4 = document.createElement('th');
var heading5 = document.createElement('th');
var cell1 = document.createElement('td');
var cell2 = document.createElement('td');
var cell3 = document.createElement('td');
var cell4 = document.createElement('td');
var cell5 = document.createElement('td');
var cell6 = document.createElement('td');
var cell7 = document.createElement('td');
var cell8 = document.createElement('td');
var cell9 = document.createElement('td');
var cell10 = document.createElement('td');
heading1.textContent = "FirstName";
heading2.textContent = "Location";
heading3.textContent = "Age";
row.appendChild(heading1);
row.appendChild(heading2);
row.appendChild(heading3);
header.appendChild(row);
table.appendChild(header);
for (var _i = 0, studentsList_1 = studentsList; _i < studentsList_1.length; _i++) {
    var student = studentsList_1[_i];
    var row_1 = document.createElement('tr');
    var cell1_1 = document.createElement('td');
    var cell2_1 = document.createElement('td');
    var cell3_1 = document.createElement('td');
    cell1_1.textContent = student.firstName;
    cell2_1.textContent = student.location;
    cell3_1.textContent = student.age.toString();
    row_1.appendChild(cell1_1);
    row_1.appendChild(cell2_1);
    row_1.appendChild(cell3_1);
    body.appendChild(row_1);
}
table.appendChild(body);
document.body.appendChild(table);
