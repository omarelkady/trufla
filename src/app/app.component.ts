import { Component, OnInit } from '@angular/core';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    ReactiveFormConfig.set({
      "validationMessage": {
          "json": "Invalid Json format",
      }
  });
  }
}
