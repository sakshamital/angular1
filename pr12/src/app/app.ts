import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Appp } from './appp/appp';

@Component({
  selector: 'app-root',
  imports: [CommonModule,Appp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pr12');
  a = "blue"
  b = "40px"
  c = (
    color = "green  ",
    fontsize = "25px",
    border = "2px solid red"
  ) => {
    return {
      'color': color,
      'font-size': fontsize,
      'border': border
    }
  }
  fontsize = "30px"
  border = "1px solid black"
  cc() {
    this.a = "yellow"
    this.fontsize = "50px"
    this.border = "5px solid green"
  }
  g = 's'

  s =   {
      'color': 'aqua',
      'font-size': '400px',
      'border': '3px solid blue'
    
  }
  gg() {
    
  }
}
