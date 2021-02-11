import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LightsOut';
  clicks = 0;
  win = false;
  topScore = 0;

  grid: boolean[][] = [
    [false, false, false, false, false,],
    [false, false, false, false, false,],
    [false, false, false, false, false,],
    [false, false, false, false, false,],
    [false, false, false, false, false,]];


  generateGame(): void {
    this.win = false;
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        let idk = Math.floor(Math.random() * Math.floor(3));
        if (idk === 0) {
          this.grid[i][j] = true;
        } else {
          this.grid[i][j] = false;
        }
      }
    }
  }


  changeValue(prvni: number, druhy: number): void {
    this.grid[prvni][druhy] = !this.grid[prvni][druhy];
    this.clicks++;


    for (let i = -1; i < 2; i++) {
      try {
        for (let j = -1; j < 2; j++) {
          if ((i + j) % 2 !== 0) {
            if (this.grid[prvni + i][druhy + j] != null) {
              this.grid[prvni + i][druhy + j] = !this.grid[prvni + i][druhy + j];
            }
          }
        }
      } catch (e) {
      }
      ;
    }
    if (this.win = this.valueCheck()) {
      this.topScore = this.clicks;
      this.clicks = 0;
      this.generateGame();
    }
  }

  valueCheck() {
    this.win = true;
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        if (this.grid[i][j] === true) {
          return false;
        }
      }
      return true;
    }
  }

  winGame() {
    this.topScore = this.clicks;
    this.clicks = 0;
    this.generateGame();
  }
}
