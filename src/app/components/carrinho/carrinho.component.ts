import { Component } from '@angular/core';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { CepApiService } from 'src/app/services/cep-api.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {

  constructor(
    public cepApiService: CepApiService,
    public carrinhoService: CarrinhoService
  ){}

  public cep: any = undefined

  public chamada: boolean = false

  public calcularFrete: any;

  public retirarNaLoja: any;

}
