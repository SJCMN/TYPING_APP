import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TYPING_APP';
  actionCall = 'Test Your Typing Skill!'
  randomText = faker.lorem.sentence();

  updateLorem(){
    this.randomText = faker.lorem.sentence();
  };
}
