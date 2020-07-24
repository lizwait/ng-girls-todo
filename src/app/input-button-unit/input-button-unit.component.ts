import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
  <p>
    input-button-unit works!
    The title is: {{ generateTitle() }}
  </p>

  <input [value]="generateTitle()">
  <button>Save</button>
`,
  styleUrls: ['./input-button-unit.component.css']
})

export class InputButtonUnitComponent implements OnInit {

  title = 'Hello World';

  constructor() {
    console.log('in constructor');
    this.changeTitle ('My First Angular App');
    console.log(this.title);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.title = 'Angular CLI Rules!'
    }, 3000);
  }

  changeTitle(newTitle: string) {
    console.log(newTitle);
    this.title = newTitle;
  }

  generateTitle(): string {
    return 'This title was generated by a method.';
  }

}
