import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {
  linkedinUrl: any;
  githubUrl: any;
  twitterUrl: any;
  instagramUrl: any;
  facebookUrl: any;

  constructor() {
    this.linkedinUrl = function () {
      window.open("https:www.linkedin.com/in/timothy-cluff-3b2738132/", "_blank");
    };

    this.githubUrl = function () {
      window.open("https://github.com/timothycluff", "_blank");
    };

    this.twitterUrl = function () {
      window.open("https://twitter.com/CluffTim", "_blank")
    };

    this.instagramUrl = function () {
      window.open("https://www.instagram.com/timmy_tim_tim_/?hl=en", "_blank");
    };

    this.facebookUrl = function () {
      window.open("https://www.facebook.com/timothy.cluff.9", "_blank");
    };
  }

  ngOnInit() {
  }
}
