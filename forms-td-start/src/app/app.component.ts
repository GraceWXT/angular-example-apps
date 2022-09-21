import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: NgForm;
  // One-way Binding
  defaultQuestion = 'pet';
  // Two-way Binding
  answer = '';
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // Method to set value for the whole form
    // this.form.setValue({
    //   userData: { username: suggestedName, email: '' },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    this.form.form.patchValue({
      userData: { username: suggestedName }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log('form.value', form.value);
  // }

  // An alternative way of getting access to the form
  // Possible to access ViewChild form value when it's not submitted yet
  onSubmit() {
    console.log('this.form', this.form);
  }
}
