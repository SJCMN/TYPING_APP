import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TYPING_APP';
  actionCall = 'Test Your Typing Skill!';
  randomText = faker.lorem.sentence();
  randomLetter = '';
  inputText = '';

  // textMatch = false;

  updateLorem() {
    this.randomText = faker.lorem.sentence();
    this.inputText = '';
    // updateLorem on enter
    // clear input on enter || textMatch
    
  }

  onInput(value: string) {
    console.log(value);
    this.inputText = value;
  }

  checkType(randomLetter: string, inputLetter: string) {

    if (!inputLetter) {
      return 'has-text-black';
    } 
    
    return inputLetter === randomLetter ? 'has-text-primary' : 'has-text-danger'
 
  }

}
