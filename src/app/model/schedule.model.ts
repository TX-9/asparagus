export class Schedule {
    public subject: string;
    public activated: boolean;
    
    constructor(subject: string, activated: boolean) {
        this.subject = subject;
        this.activated = activated;
    }
}