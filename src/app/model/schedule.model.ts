import * as moment from 'moment';

export class Schedule {
    public subject: string;
    public activated: boolean;
    public date: any;
    
    constructor(subject: string, activated: boolean) {
        this.subject = subject;
        this.activated = activated;
        this.date = moment().format('LLLL');
    }
}