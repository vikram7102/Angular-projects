import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  // templateUrl: './my-component.component.html',
  template: `
  <h1>{{name1}}</h1>
  <body>
      hey abcd, how to know more about angular
  </body>`,
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent {
 name1="vikram"
}
