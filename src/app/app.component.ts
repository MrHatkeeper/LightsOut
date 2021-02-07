import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LightsOut';


  grid: boolean[][] = [
    [true, true, false, true, false],
    [false, true, true, false, true],
    [true, true, false, true, false],
    [false, true, true, false, true],
    [true, true, false, true, false],
  ];


  changeValue(prvni: number, druhy: number): void {
    this.grid[prvni][druhy] = !this.grid[prvni][druhy];


    for (let i = -1; i < 2; i++) {
      try{
        for (let j = -1; j < 2; j++) {
          if ((i + j) % 2 !== 0) {
            console.log("j = " + j);
            if (this.grid[prvni + i][druhy + j] != null) {
              this.grid[prvni + i][druhy + j] = !this.grid[prvni + i][druhy + j];
            }
          }
        }
      }
      catch (e){};
    }

  }
}
