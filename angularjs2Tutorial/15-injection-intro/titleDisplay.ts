import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './titleDisplay.html'
})
export class TitleDisplayComponent {
  pageTitle: string;

  constructor(t: Title) {
  	t.setTitle("Set the title");
    this.pageTitle = t.getTitle();
  }
}
