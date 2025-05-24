import { Subject } from './Subject';

// Declaration merging to add experienceTeachingC to Teacher interface
declare module './Teacher' {
    interface Teacher {
        experienceTeachingC?: number;
    }
}

class cpp extends Subject {
    getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
        if (!this.teacher || this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0) {
            return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
    }
}

export default cpp;