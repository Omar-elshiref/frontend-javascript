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


console.log(teacher3);