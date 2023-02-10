import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {UsuarioService} from "../../services/usuario.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  loading: boolean;

  constructor(private usuarioService: UsuarioService) {
    this.loading = true;
    this.getLoading();
  }

  getLoading(): void {
    this.usuarioService.getLoading().subscribe(
      {
        next: data => {
          this.loading = data;
          console.log(data)
        },
        error: err => {
        },
        complete: () => {
        }
      });
  }
}
