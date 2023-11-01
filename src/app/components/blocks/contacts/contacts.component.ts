import { Component} from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  formData: any = {};
  // formValid: boolean = true;

  constructor() {}

  onSubmit() {
    if (this.isFormValid()) {
      if (this.isPhoneNumberValid(this.formData.phone)) {
        alert(JSON.stringify(this.formData));
        console.log('Дані відправлено успішно', this.formData);
        this.resetForm();
      } else {
        console.error('Введіть коректний номер телефону');
        alert('Введіть коректний номер телефону');
      }
    } else {
      // this.formValid = false;
      console.error('Заповність всі поля');
      alert('Заповність всі поля');
    }
  }

  isFormValid(): boolean {
    return (
      this.formData.fullname &&
      this.formData.address &&
      this.formData.phone &&
      this.formData.pplStatus &&
      this.formData.connectionType
    );
  }

  isPhoneNumberValid(phoneNumber: string): boolean {
    const phonePattern = /^(\+?(\d{1,})?)?(\d{10})$/;
    return phonePattern.test(phoneNumber);
  }

  resetForm() {
    this.formData = {};
    // this.formValid = true;
  }

}
