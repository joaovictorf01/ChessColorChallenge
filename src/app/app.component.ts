import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GameIntroComponent } from "./game-intro/game-intro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GameIntroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ChessColorChallenge';
}
