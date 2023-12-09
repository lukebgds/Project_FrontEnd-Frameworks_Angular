import { Injectable } from '@angular/core';
import { __values } from 'tslib';
import { AppRoutingModule } from '../app-routing.module';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: any[] = []
  public sessao: any

  constructor(private router: Router) {
    this.init();
   }


  async init() {
    this.sinc();
  }

  async sinc(){
    let chaves = Object.keys(localStorage)

    chaves.forEach((chave) => {
      var value: any = localStorage.getItem(chave);
      this.users.push(JSON.parse(value));
    });
    console.log(this.users)
  }

  cadastrar(nome: string, email: string, senha: string, conSenha: string){

    let user = {
      nome: nome.toLowerCase().trim(),
      email: email.toLowerCase().trim(),
      senha: senha,
      conSenha: conSenha,
    }

    if (this.validaNome(user.nome) == true && this.validaEmail(user.email) == true && this.validaSenha(user.senha,user.conSenha) == true){
      localStorage.setItem(user.nome,JSON.stringify(user));
      this.users.push(user)
      alert('Usuário Cadastrado com Sucesso!');
      this.router.navigate(["login"])
    } 
  }

  //verifica se o nome está no formato desejado
  validaNome(nome: string){
    if(nome.length > 2){
      return true
    } else {
      alert('Insira um nome válido');
      return false
    }
  }

  // Verifica se o Email está no formato desejado
  validaEmail(email: string){
      let esquerda = email.substring(0, email.indexOf("@"));
      let direita = email.substring(email.indexOf("@") + 1, email.length);

      if (
          email.search("@") != -1 && 
          esquerda.length >= 1 &&
          esquerda.search("@") == -1 &&
          esquerda.search(" ") == -1 &&
          direita.length >= 3 &&
          direita.search("@") == -1 &&
          direita.search(" ") == -1 &&
          direita.search(".") != -1
          ){
          return true
      } else {
        alert('Insira um email valido!');
          return false
      }
  }

  // Verifica se as senhas conicidem
  validaSenha(senha: string, conSenha: string){
    if(senha == conSenha){
      return true
    } else {
      alert('Senhas não Coincidem');
      return false
    }
  }

  
  login(email: string, senha: string){
    
    if(this.buscarCadastro(email) != -1){
      let index = this.buscarCadastro(email)
      if(this.users[index].senha == senha){
        this.sessao = this.users[index]
        alert('Login realizado com Sucesso!');
        this.router.navigate([""])
        console.log(this.sessao)
        
      } else{
        alert('Senha Incorreta');
      }
    } else if (this.validaEmail(email)){
      alert('Email não cadastrado!')
    } 
  }

  // Verifica se o email esta cadastrado e se tiver retorna o index dele
  buscarCadastro(email: string){

    let index: number = 0;
    let find: boolean = false;

    for (let i = 0; find == false && i < this.users.length; i++){
      if (this.users[i].email == email){
        find = true;
        index = i;
      } else{
        index = -1;
      }
    }
    return index
  }

}
