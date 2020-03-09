export class Affectation {
  id?: number;
  fname: string;
  lname: string;
  email: string;
  account: string;
  phone: string;
  activated: boolean;
  addedAt: string;
  link: string;

  constructor(data: any) {
    this.account = data.accountNumber;
    data.employees.forEach(item => {
       this.fname = item.fname;
       this.lname = item.lname;
       this.email = item.email;
       this.phone = item.phone;
       this.activated = item.isActive;
    });
  }

}
