import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class MediumService {
  private username: string;
  private clientId = '26a4f50d1e60';
  private clientSecret = '7e5b66f1da7be675bd8c3b97c4ecd9d60cd02e37';
  userId = '@papaponmx';


  constructor(private _http: Http) {
    this.username = '@papaponmx';
   }

  getPosts() {
   const mediumUrl = `https://api.medium.com/v1/users/${this.userId}/publications`;
   console.log(mediumUrl);

   return this._http.get(`https://api.medium.com/v1/users/${this.username}/publications}`)
   .map(res => res.json());
  }
}
