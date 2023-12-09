import { Injectable } from '@angular/core';
import { CepApiService } from './cep-api.service';
import { UrlMatchResult } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public carrinho: any[] = []

  public subtotal: number = 0;

  public endereco: any = {
    bairro: '',
    localidade: '',
    logradouro: '',
    uf: ''
  };

  public frete: number = 0;
  public total: number = 0;

  constructor(
    private cepApiService: CepApiService,
  ) { }
  
  calcularFrete(cep: string){

    this.cepApiService.getViaCEPService(cep).subscribe((value) => {
      this.endereco.logradouro = JSON.parse(JSON.stringify(value)) ['logradouro'];
      this.endereco.bairro = ', ' + JSON.parse(JSON.stringify(value)) ['bairro'];
      this.endereco.localidade = ' - ' + JSON.parse(JSON.stringify(value)) ['localidade'];
      this.endereco.uf = '-' + JSON.parse(JSON.stringify(value)) ['uf'];
    });

    if(this.frete > 0){
      this.total = this.total - this.frete;
      this.frete = parseFloat(((((parseInt(cep)/1000000)*99991)/99730)/2).toFixed(1));
      this.total = this.total + this.frete;
      console.log('frete > 0')
    } else {
      this.frete = parseFloat(((((parseInt(cep)/1000000)*99991)/99730)/2).toFixed(1));
      this.total = this.total + this.frete;
    }

  }

  addCarrinho(nome: string, valor: number, img: string){

    let item = {
      nome: nome,
      valor: valor,
      img: img,
    }

    this.carrinho.push(item);

    this.subtotal = this.subtotal + valor;

    this.total = this.subtotal;

    alert("Adicionado com Sucesso!");
  }

  subCarrinho(nome: string, valor: number){
    let index = this.buscarItem(nome);
    this.carrinho.splice(index, 1)
    this.total = this.total - valor;
    this.subtotal = this.subtotal - valor
  }

  buscarItem(nome: string){

    let index: number = 0;
    let find: boolean = false;

    for (let i = 0; find == false && i < this.carrinho.length; i++){
      if (this.carrinho[i].nome == nome){
        find = true;
        index = i;
      } else{
        index = -1;
      }
    }
    return index
  }


}
