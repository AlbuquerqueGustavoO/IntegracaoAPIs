import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  texto: string

  constructor() { }

  ngOnInit(): void {
    this.texto = 'Voltando a estudar!'
  }

  clicou() {
    this.texto = 'Parabéns!!'
  }

}
