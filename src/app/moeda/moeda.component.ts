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
      switch (this.selectedOption1) {
        case '1':
          this.primeiroNumero = this.segundoNumero * 1000;
          break;
        case '2':
          this.segundoNumero = this.primeiroNumero / 5.20;
          break;
      }
    }
  }
}
function converter() {
  throw new Error('Function not implemented.');
}

