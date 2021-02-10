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
    this.todos.push("aprenda a pegar onibus no terminal")
    this.todos.push("tentar usar um celular que nao seja apple")

  }
  alterarTexto() {
    this.title = 'Texto alterado'
  }
  
}
