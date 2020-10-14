// import { Http, Response } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Http } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';



@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(
    private _http:Http
  ) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response: Response) => response.json())
  }

}
