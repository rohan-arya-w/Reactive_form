import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Details:FormGroup
  constructor(){
  this.Details = new FormGroup({
    'name' : new FormControl(''),
    'email' : new FormControl(''),
    'Phone' : new FormControl(''),
    'password' : new FormControl(''),
    'country' : new FormControl(''),
    'state' : new FormControl(''),
    'city' : new FormControl(''),
    'Gender' : new FormControl(''),
    'Marital-status' : new FormControl(''),
    'Fav-Food' : new FormControl(''),
    'Fav-color' : new FormControl(''),
    
    
  });
}
submitData(){
  console.log(this.Details.value)
}
}
