"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("./Subject");
var cpp = /** @class */ (function (_super) {
    __extends(cpp, _super);
    function cpp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    cpp.prototype.getRequirements = function () {
        return 'Here is the list of requirements for Cpp';
    };
    cpp.prototype.getAvailableTeacher = function () {
        if (!this.teacher || this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0) {
            return 'No available teacher';
        }
        return "Available Teacher: ".concat(this.teacher.firstName);
    };
    return cpp;
}(Subject_1.Subject));
exports.default = cpp;
