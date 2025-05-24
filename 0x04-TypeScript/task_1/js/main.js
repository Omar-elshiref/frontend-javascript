"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentClass = exports.teacher3 = void 0;
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
// Implement the class using the interfaces
var StudentClass = /** @class */ (function () {
    function StudentClass(_a) {
        var firstName = _a.firstName, lastName = _a.lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return 'Currently working';
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
exports.StudentClass = StudentClass;
var student = new StudentClass({ firstName: 'Omar', lastName: 'Sharif' });
console.log(student.displayName()); // Output: Omar
console.log(student.workOnHomework()); // Output: Currently working
