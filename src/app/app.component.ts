import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemplo2';

  //propiedades
  resultado:string = '';
  valor1: number = this.generarAleatorio();
  valor2: number = this.generarAleatorio();
  valor3: number = this.generarAleatorio();

  //funcion que genera un aletaorio entre 1 y 6
  generarAleatorio(){
    return Math.floor(Math.random() * 6) + 1;
  }

  //funcion que hace la tirada y verifica el resultado
  tirarDados(){
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();

    //comparamos si los tres valores son iguales

    if(this.valor1 == this.valor2 && this.valor1 == this.valor3){
      this.resultado = "Felicidades, ganaste";
    }else{
      this.resultado = "Lastima, perdiste. Sigue participando";
    }
  }
}
