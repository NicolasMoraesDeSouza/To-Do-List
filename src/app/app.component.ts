import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[] = [];
  public title: String = 'Minhas tarefas';

  constructor() {
    
    this.todos.push('passear com cachorro');
    this.todos.push('ir ao super mercado');
    this.todos.push('cortar o cabelo');

  }
  alterarTexto() {
    this.title = 'Texto alterado'
  }
  
}
