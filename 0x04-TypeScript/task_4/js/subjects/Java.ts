import { Subject } from './Subject';

// Declaration merging to add experienceTeachingJava to Teacher interface
declare module './Teacher' {
    interface Teacher {
        experienceTeachingJava?: number;
    }
}

export class Java extends Subject {
    getRequirements(): string {
        return 'Here is the list of requirements for Java';
    }
    getAvailableTeacher(): string {
        if (!this.teacher || this.teacher.experienceTeachingReact === undefined || this.teacher.experienceTeachingReact <= 0) {
            return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
    }
}
export default Java;

    