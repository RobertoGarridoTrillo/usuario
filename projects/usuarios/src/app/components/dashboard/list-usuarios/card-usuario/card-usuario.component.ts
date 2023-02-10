import {Component, Input, OnInit} from '@angular/core';
import {UsuarioService} from "../../../../services/usuario.service";

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent implements OnInit{

  @Input() user: any;

  urlImg = "assets/img/" + this.usuarioService.getRandomInt(1, 26) + ".jpg";
  /*  imgUrl: string = "";*/
  firstName: string= "";
  email: string= "";
  id: number = 0;

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    // la api ha cambiado y no tiene fotos
    /*this.imgUrl = this.user._link.avatar.href;*/
    this.firstName = this.user.name;
    this.email = this.user.email;
    this.id = this.user.id;
  }


}
