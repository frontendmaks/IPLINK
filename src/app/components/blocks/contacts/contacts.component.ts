import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser';
// import { EmailService } from '../../services/email.service';
// import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  formData: any = {};

  form: FormGroup = this.fb.group({
    fullname: '',
    pplStatus: '',
    address: '',
    pin: '',
    phone: '',
    connectionType: ''
  })

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    if (this.isFormValid()) {
      if (this.isPhoneNumberValid(this.form.value.phone)) {
        this.send();
      } else {
        console.error('Введіть коректний номер телефону');
        alert('Введіть коректний номер телефону');
      }
    } else {
      console.error('Заповність всі поля');
      alert('Заповність всі поля');
    }
  }

  async send() {
    emailjs.init("dhe1IJ2d477laVQQv");
    let result = await emailjs.send("service_w1pdoj7", "template_y66jp6o", {
      fullname: this.form.value.fullname,
      pplStatus: this.form.value.pplStatus,
      address: this.form.value.address,
      pin: this.form.value.pin,
      phone: this.form.value.phone,
      connectionType: this.form.value.connectionType
    });

    // alert('Message sent!');
    this.form.reset();
  }

  isFormValid(): boolean {
    return (
      this.form.value.fullname &&
      this.form.value.address &&
      this.form.value.phone &&
      this.form.value.pplStatus &&
      this.form.value.connectionType
    );
  }

  isPhoneNumberValid(phoneNumber: string): boolean {
    const phonePattern = /^\+380\d{9}$/;
    return phonePattern.test(phoneNumber);
  }
}
