import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(
    public userService: UserService,
  ){}

  public user: any = {
    nome: undefined,
    email: undefined,
    senha: undefined,
    conSenha: undefined,
  }


}
