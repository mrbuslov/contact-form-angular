import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  // tell Angular about our fields
  name = '';
  email = '';
  message = '';

  constructor() { }

  ngOnInit(){
  }

  submitForm() {
    alert("Hey, You're with us! We appreciate it :)")
  }
}
