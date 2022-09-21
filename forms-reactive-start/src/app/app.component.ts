import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email])
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
}
