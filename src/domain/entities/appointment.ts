export interface AppointmentI {
  id: string;
  patientName: string;
  ownerName: string;
  ownerPhone: string;
  ownerMail: string;
  symptoms: string;
  date: Date;
}

export class Appointment {
  public id: string;
  public patientName: string;
  public ownerName: string;
  public ownerPhone: string;
  public ownerMail: string;
  public symptoms: string;
  public date: Date;

  constructor(body: AppointmentI) {
    this.id = body.id;
    this.patientName = body.patientName;
    this.ownerName = body.ownerName;
    this.ownerPhone = body.ownerPhone;
    this.ownerMail = body.ownerMail;
    this.symptoms = body.symptoms;
    this.date = body.date;
  }
}
