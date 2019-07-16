import * as moment from 'moment';

export class Schedule {
    public subject: string;
    public status: boolean;
    public date: any;
    public desc: string;
    constructor(subject: string, status: boolean, desc: string) {
        this.subject = subject;
        this.status = status;
        this.date = moment().format('LLLL');
        this.desc = desc;
    }
}