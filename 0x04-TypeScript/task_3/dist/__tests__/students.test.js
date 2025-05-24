// __tests__/teacher.test.ts
import { teacher3 } from '../js/main';
describe('teacher3 object', function () {
    it('should have the correct properties and values', function () {
        expect(teacher3).toEqual({
            firstName: 'John',
            lastName: 'Doe',
            fullTimeEmployee: true,
            location: 'London',
            numberOfReports: 17,
        });
    });
    it('should be a full object with all required fields', function () {
        expect(teacher3).toHaveProperty('firstName');
        expect(teacher3).toHaveProperty('lastName');
        expect(teacher3).toHaveProperty('fullTimeEmployee');
        expect(teacher3).toHaveProperty('location');
        expect(teacher3).toHaveProperty('numberOfReports');
    });
});
//# sourceMappingURL=students.test.js.map