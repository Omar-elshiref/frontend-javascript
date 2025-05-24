export interface Teacher {
readonly firstName: string;    
  readonly lastName: string;                
  fullTimeEmployee: boolean;               
  location: string;                         
  yearsOfExperience?: number;               
  [key: string]: unknown;                      
}

export const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,                
};


console.log(teacher3);