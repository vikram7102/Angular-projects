import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template:`
  <div>

  <h1>
    {{title}}
  </h1>
  <app-student></app-student>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vikram';
  title1 = 'student details';
}
