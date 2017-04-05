import { Component, OnInit } from '@angular/core';
import { MediumService } from '../medium.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  description =
  `I design and develop websites for people who want intuitive, engaging and compelling solutions to their toughest problems.`;
  imgUrl = 'https://riosjaime.com/assets/img/profile2.jpg';

  constructor(private _MediumService: MediumService) { }

  ngOnInit() {
    console.log(this._MediumService.getPosts());
  }

}
