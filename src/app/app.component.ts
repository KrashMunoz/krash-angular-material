import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular landing page';

  clickMethod(event) {
    console.log("Click Event =>", event)
  }
}
