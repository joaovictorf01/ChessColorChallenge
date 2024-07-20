import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {
  private attempts: number = 0;
  private correct: number = 0;
  private incorrect: number = 0;

  constructor() { }

  incrementAttempts(): void {
    this.attempts++;
  }

  incrementCorrect(): void {
    this.correct++;
    this.incrementAttempts();
  }

  incrementIncorrect(): void {
    this.incorrect++;
    this.incrementAttempts();
  }

  getScore(): number {
    return this.correct;  // Assume score is the number of correct answers
  }

  getStatistics(): { attempts: number; correct: number; incorrect: number } {
    return {
      attempts: this.attempts,
      correct: this.correct,
      incorrect: this.incorrect
    };
  }

  resetScore(): void {
    this.attempts = 0;
    this.correct = 0;
    this.incorrect = 0;
  }
}
