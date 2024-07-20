import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importe CommonModule
import { Router } from '@angular/router';
import { ScoreService } from '../score.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css'],
  standalone: true,
  imports: [CommonModule]  // Adicione CommonModule aos imports
})
export class GameBoardComponent implements AfterViewInit {
currentSquare: string = '';
  squareColor: string = '';
  lastAnswerMessage: string = '';
  userName: string = '';
  showAlert: boolean = false;  // Controla a visibilidade do alerta

  @ViewChild('question', { static: false }) questionElement!: ElementRef<HTMLHeadingElement>;

  constructor(
    private userService: UserService, 
    public  scoreService: ScoreService, 
    private router: Router
  ) {
    this.userName = this.userService.getUserName();
    this.generateAndSetRandomSquare();
  }

  ngAfterViewInit() {
    this.setFocusToQuestion();
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
    if (correct) {
      this.lastAnswerMessage = `Parabéns, ${this.userName}, você acertou!`;
      this.scoreService.incrementCorrect();
    } else {
      this.lastAnswerMessage = `Que pena, ${this.userName}, você errou.`;
      this.scoreService.incrementIncorrect();
    }
    this.showAlert = true;  // Mostrar alerta
    setTimeout(() => {
      this.showAlert = false;  // Esconder alerta
      this.setFocusToQuestion();
    }, 300);  // A mensagem de alerta desaparece após 3000 ms
    this.generateAndSetRandomSquare();
  }

  setFocusToQuestion(): void {
    if (this.questionElement && this.questionElement.nativeElement) {
      this.questionElement.nativeElement.focus();
    }
  }

  exitGame(): void {
    this.router.navigate(['/']); // Navigate back to intro or another screen as desired
  }
}
