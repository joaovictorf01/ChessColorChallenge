import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'  // Este serviço estará disponível em toda a aplicação
})
export class UserService {
  private userName: string = '';

  constructor() { }

  setUserName(name: string) {
    this.userName = name;
  }

  getUserName(): string {
    return this.userName;
  }
}
