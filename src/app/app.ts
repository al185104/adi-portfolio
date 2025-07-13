import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

// test comment

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'adi-portfolio';
}
