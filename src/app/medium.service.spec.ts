import { TestBed, inject } from '@angular/core/testing';

import { MediumService } from './medium.service';

describe('MediumService', () => {



  xit('Should have a getPosts Method', () => {
    const posts = MediumService.getPosts();

    expect(posts).toBeTruthy;
  });
});
