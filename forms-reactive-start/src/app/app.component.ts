import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  invalidUsernames = ['chris', 'anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          // bind(this) is only needed when the validator function uses 'this'
          this.invalidNames.bind(this)
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.invalidEmails
        )
      }),
      gender: new FormControl('female'),
      hobbies: new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    // Need to specify 'hobbies' to be a FormArray
    // Otherwise it's default to AbstractControl and cannot be pushed
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  get hobbyControls() {
    // return (<FormArray>this.signupForm.get('hobbies')).controls;
    return (this.signupForm.get('hobbies') as FormArray).controls;
  }

  invalidNames(control: FormControl): { [s: string]: boolean } {
    // For browsers not supporting .includes, use .indexOf(value) !== -1
    if (this.invalidUsernames.includes(control.value)) {
      return { invalidUsername: true };
    }
    // Must return object with key: value - true, or Null
    // Should not return false
    return null;
  }

  invalidEmails(control: FormControl): Promise<any> | Observable<any> {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ invalidEmail: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
  }
}
