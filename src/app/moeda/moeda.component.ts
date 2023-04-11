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


   limpar() {
      this.primeiroNumero = 0;
      this.segundoNumero = 0;
      this.resultado = 0;
   }
 converter() {
      if(this.primeiroNumero !==0){
    this.resultado =  this.segundoNumero * this.primeiroNumero;
    } else {
        alert('Não é possível dividir por zero!');
     }
 }
}

