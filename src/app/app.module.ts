import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { GameIntroComponent } from './game-intro/game-intro.component';
import { GameBoardComponent } from './game-board/game-board.component';

const routes: Routes = [
    { path: '', component: GameIntroComponent, title: 'Intro' },
    { path: 'play', component: GameBoardComponent, title: 'Play' }
];

@NgModule({
    declarations: [],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),  // Correto lugar para configurar as rotas
        AppComponent  // Certifique-se de que o AppComponent está aqui como um componente standalone
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
