import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  description =
  'I design &#38; develop websites for people who want intuitive, engaging and compelling solutions to their toughest problems.';
  imgUrl = 'https://riosjaime.com/assets/images/profile2.jpg';

  constructor() { }

  ngOnInit() {
  }

}
