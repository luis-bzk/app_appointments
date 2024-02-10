export interface AppointmentI {
  patientName: string;
  ownerName: string;
  ownerPhone: string;
  ownerMail: string;
  symptoms: string;
}

export class Appointment {
  public patientName: string;
  public ownerName: string;
  public ownerPhone: string;
  public ownerMail: string;
  public symptoms: string;

  constructor(body: AppointmentI) {
    this.patientName = body.patientName;
    this.ownerName = body.ownerName;
    this.ownerPhone = body.ownerPhone;
    this.ownerMail = body.ownerMail;
    this.symptoms = body.symptoms;
  }
}
