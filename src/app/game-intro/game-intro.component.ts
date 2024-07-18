import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-game-intro',
  templateUrl: './game-intro.component.html',
  styleUrls: ['./game-intro.component.css'],
  standalone: true,
  imports: [FormsModule]  // Adicionar o FormsModule aqui
})
export class GameIntroComponent {
  userName: string = '';

  constructor(private userService: UserService, private router: Router) { }

  startGame(): void {
    this.userService.setUserName(this.userName);
    this.router.navigate(['/play']);
  }
}
