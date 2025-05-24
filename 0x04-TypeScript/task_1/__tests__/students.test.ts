// __tests__/teacher.test.ts
import { teacher3 } from '../js/main';

describe('teacher3 object', () => {
  it('should have the correct properties and values', () => {
    expect(teacher3).toEqual({
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,                
    });
  });

  it('should be a full object with all required fields', () => {
    expect(teacher3).toHaveProperty('firstName');
    expect(teacher3).toHaveProperty('lastName');
    expect(teacher3).toHaveProperty('fullTimeEmployee');
    expect(teacher3).toHaveProperty('location');
    expect(teacher3).toHaveProperty('contract');
  });
});
