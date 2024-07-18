import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
  standalone: true
})
export class GameBoardComponent {
  currentSquare: string = '';
  squareColor: string = '';
  score: number = 0;
  lastAnswerMessage: string = '';
  userName: string = ''; // Este valor será obtido do serviço

  constructor(private userService: UserService, private router: Router) {
    this.userName = this.userService.getUserName();
    this.generateAndSetRandomSquare();
  }

  generateAndSetRandomSquare(): void {
    this.currentSquare = this.generateRandomSquare();
    this.squareColor = this.calculateSquareColor(this.currentSquare);
  }

  generateRandomSquare(): string {
    const files = 'abcdefgh';
    const ranks = '12345678';
    const file = files[Math.floor(Math.random() * files.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    return `${file}${rank}`;
  }

  calculateSquareColor(square: string): string {
    const file = square.charAt(0);
    const rank = square.charAt(1);
    const isFileEven = (file.charCodeAt(0) % 2 === 0);
    const isRankEven = (parseInt(rank) % 2 === 0);
    return (isFileEven === isRankEven) ? 'Preto' : 'Branco';
  }

  checkAnswer(userGuess: string): void {
    const correct = userGuess === this.squareColor;
    this.updateScoreAndFeedback(correct);
    this.generateAndSetRandomSquare(); // Gera uma nova casa após cada resposta
  }

  updateScoreAndFeedback(correct: boolean): void {
    if (correct) {
      this.score++;
      this.lastAnswerMessage = `Parabéns, ${this.userName}, você acertou!`;
    } else {
      this.lastAnswerMessage = `Que pena, ${this.userName}, você errou.`;
    }
  }

  exitGame(): void {
    this.router.navigate(['/']); // Navega de volta à tela intro ou para outra tela conforme desejado
  }
}
