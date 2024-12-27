import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrl: './display-details.component.css',
})
export class DisplayDetailsComponent {
  SecretPassword: String = 'tuna';
  display: boolean = false;
  log: number[] = [];

  displayParagraph(): void {
    this.display = !this.display;
    this.log.push(this.log.length + 1);
  }
}
