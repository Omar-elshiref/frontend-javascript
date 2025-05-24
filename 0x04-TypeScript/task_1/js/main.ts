export interface Teacher {
readonly firstName: string;    
  readonly lastName: string;                
  fullTimeEmployee: boolean;               
  location: string;                         
  yearsOfExperience?: number;               
  [key: string]: unknown;                      
}

export interface Directors extends Teacher {
  numberOfReports: number;
}

export const teacher3: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,                
};
// eslint-disable-next-line @typescript-eslint/class-name-casing
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;  
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};


console.log(printTeacher('John', 'Doe'));








// Define the constructor interface
export interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Define the interface that describes the class behavior
export interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the class using the interfaces
export class StudentClass implements StudentInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass({ firstName: 'Omar', lastName: 'Sharif' });

console.log(student.displayName()); // Output: Omar
console.log(student.workOnHomework()); // Output: Currently working
