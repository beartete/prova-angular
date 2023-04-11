import { Component } from '@angular/core';

@Component({
  selector: 'app-moeda',
  templateUrl: './moeda.component.html',
  styleUrls: ['./moeda.component.css']
})
export class MoedaComponent {
  selectedOption1: string = '';
  primeiroNumero: number = 0;
  segundoNumero: number = 0;
  resultado: number = 0;
converter: any;

  limpar() {
    this.primeiroNumero = 0;
    this.segundoNumero = 0;
    this.resultado = 0;

    converter(); {
      this.resultado = this.primeiroNumero * 5.20;
      return;
      }
    }
  }
function converter() {
  throw new Error('Function not implemented.');
}

