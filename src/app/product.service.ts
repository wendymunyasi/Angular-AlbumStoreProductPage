import { Album } from './album';
// import { Http, Response } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Http } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(
    private _http: Http
  ) { }

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map(response => <Album>response.json() as Album)
  }

  // getAlbum(id: number){
  //   return this._http.get(this._albumUrl).map(respone => response.json());
  // }

}
