"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teacher3 = void 0;
exports.teacher3 = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
};
var printTeacher = function (firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
};
console.log(printTeacher('John', 'Doe'));
