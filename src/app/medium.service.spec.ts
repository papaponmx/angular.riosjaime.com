import { TestBed, inject } from '@angular/core/testing';

import { MediumService } from './medium.service';

describe('MediumService', () => {
  const service: MediumService = new MediumService();


  xit('Should have a getPosts Method', () => {
    const posts = service.getPosts();

    expect(posts).toBeTruthy;
  });
});
