import { Injectable } from '@angular/core';

@Injectable()
export class MediumService {
  private clientId = '26a4f50d1e60';
  private clientSecret = '7e5b66f1da7be675bd8c3b97c4ecd9d60cd02e37';
  userId = '@papaponmx';


  constructor() { }

  getPosts() {
   const mediumUrl = `https://api.medium.com/v1/users/${this.userId}/publications`;
   console.log(mediumUrl);
  }
}
