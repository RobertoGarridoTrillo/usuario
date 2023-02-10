import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private _loading: boolean = false;
  private loading$ = new Subject<boolean>();

  url = "https://gorest.co.in/public/v2/users";
  token = '';

  constructor(private http: HttpClient) {
  }

  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.url + "?access-token=" + this.token);
  }

  getUsuario(id: number): Observable<any> {
    return this.http.get<any>(this.url + '/' + id + +"?access-token=" + this.token);
  }

  getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
  }

  get loading(): boolean {
    return this._loading;
  }

  set loading(val:boolean){
    this._loading = val;
    this.loading$.next(this._loading);
    console.log("Estoy en el servicio ", val);
  }

  getLoading(): Observable<boolean> {
    return this.loading$.asObservable();
  }
}
