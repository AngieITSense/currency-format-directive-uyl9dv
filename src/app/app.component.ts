import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  form: FormGroup;
  numberChars = new RegExp('[^0-9]', 'g'); // match any characters except numbers
  constructor(private fb:FormBuilder ) {}

  ngOnInit(){
    this.form = this.fb.group({
      currency: this.fb.control(12345678)
    })
  }

  submit(){
    const val = this.form.get('currency').value;

    // For your convenience
    // convert currency string to raw number (don't save formatting, remove commas and dots)
    if (typeof(val) === 'string') { 
      console.log(`${typeof(val)} ${Number(val.replace(this.numberChars, ''))}`);
    } else {
      console.log(`${typeof(val)} ${val}`);
    }
  }

}