import {Component} from '@angular/core';
import {UsuarioService} from "../../../services/usuario.service";

@Component({
  selector: 'app-list-usuarios',
  templateUrl: './list-usuarios.component.html',
  styleUrls: ['./list-usuarios.component.css']
})

export class ListUsuariosComponent {

  listUsuarios: any[] = [];

  constructor(private usuarioService: UsuarioService) {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this.usuarioService.loading = true;

    this.usuarioService.getUsuarios().subscribe(
      {
        next: data => {
          this.listUsuarios = data;
          this.usuarioService.loading = false;
        },
        error: err => {
        },
        complete: () => {
        }
      });
  }

}
