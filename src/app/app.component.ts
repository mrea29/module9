import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Perscription';
  randomNum = Math.floor(Math.random() * 4) + 1;

  //declare variable to hold response and make it public to be assessible from compoenents.html 
}
