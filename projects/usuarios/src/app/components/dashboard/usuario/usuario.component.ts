import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsuarioService} from "../../../services/usuario.service";

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  id: number;
  name: string = "";
  idUser: string = "";
  email: string = "";
  status: string = "";
  gender: string = "";
  urlImg = "assets/img/" + this.usuarioService.getRandomInt(1, 26) + ".jpg";


  constructor(
    private aRoute: ActivatedRoute,
    private usuarioService: UsuarioService) {

    this.id = parseInt(this.aRoute.snapshot.params['id']);
    /*this.id = parseInt(<string>this.aRoute.snapshot.paramMap.get('id'));*/

    this.getUsuario();
  }

  getUsuario(): void {
    this.usuarioService.getUsuario(this.id).subscribe(value => {
      this.name = value['name'];
      this.gender = value['gender'];
      this.idUser = value['id'];
      this.status = value['status'];
      this.email = value['email'];
    });
  }
}

