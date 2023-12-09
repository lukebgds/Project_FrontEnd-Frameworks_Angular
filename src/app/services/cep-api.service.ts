import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepApiService {

  

  constructor(
    private httpClient: HttpClient
  ) { }

  getViaCEPService (cep: string){
    return this.httpClient.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

}
