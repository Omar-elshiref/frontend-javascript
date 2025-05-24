"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = exports.Director = void 0;
exports.createEmployee = createEmployee;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return "Working from home";
    };
    Director.prototype.getCoffeeBreak = function () {
        return "Getting a coffee break";
    };
    Director.prototype.workDirectorTasks = function () {
        return "Getting to director tasks";
    };
    return Director;
}());
exports.Director = Director;
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Working from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
exports.Teacher = Teacher;
function createEmployee(salary) {
    if (salary < 500) {
        return new Teacher();
    }
    else {
        return new Director();
    }
}
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
// export function isDirector(employee: Director | Teacher): employee is Director {
//   return (employee as Director).workDirectorTasks !== undefined;
// }
// export function executeWork(employee: Director | Teacher): string {
//   if (isDirector(employee)) {
//     return employee.workDirectorTasks();
//   } else {
//     return employee.workTeacherTasks();
//   }
// }
// export function getDisplayName(employee: Director | Teacher): string {
//   if (isDirector(employee)) {
//     return "Director";
//   } else {
//     return "Teacher";
//   }
// }
