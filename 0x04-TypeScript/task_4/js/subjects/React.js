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
exports.React = void 0;
var Subject_1 = require("./Subject");
var React = /** @class */ (function (_super) {
    __extends(React, _super);
    function React() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    React.prototype.getRequirements = function () {
        return 'Here is the list of requirements for React';
    };
    React.prototype.getAvailableTeacher = function () {
        if (!this.teacher || this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0) {
            return 'No available teacher';
        }
        return "Available Teacher: ".concat(this.teacher.firstName);
    };
    return React;
}(Subject_1.Subject));
exports.React = React;
exports.default = React;
