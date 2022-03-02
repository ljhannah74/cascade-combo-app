import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import { SelectService } from './select.service';
import { Country } from './country';
import { State } from './state';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {
  studentForm:FormGroup;

  constructor(private selectService: SelectService) { }

  ngOnInit(){
    this.studentForm = new FormGroup({
      'studentName':new FormControl(''),
      'countryId': new FormControl(''),
      'stateId': new FormControl('')
    })

    this.studentForm.setValue({
      'studentName':'',
      'countryId': 0,
      'stateId': 0
    })
  }


  onSubmit(){
    console.log(this.studentForm);
  }
}

