import { Subject } from './Subject';

// Declaration merging to add experienceTeachingReact to Teacher interface
declare module './Teacher' {
    interface Teacher {
        experienceTeachingReact?: number;
    }
}

export class React extends Subject {
    getRequirements(): string {
        return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
        if (!this.teacher || this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0) {
            return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
    }
}

export default React;