import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public running: boolean = true;
  public type: String = '';

  public finishGame(str: String): void {
    this.running = false;
    this.type = str;
  }

  public restartGame() {
    this.running = true;
    this.type = '';
  }
}
