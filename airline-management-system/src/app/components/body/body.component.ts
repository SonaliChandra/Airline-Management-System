import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  imgsrc="https://th.bing.com/th/id/R8792a82cd0218a56ae8b200d95ceb740?rik=i6V4jHOuo08nYg&riu=http%3a%2f%2fthriftytraveler.com%2fwp-content%2fuploads%2f2015%2f09%2fnight_flight_hd_widescreen_wallpapers_1920x1200.jpeg&ehk=Dg8RwfygdFvs9kcAQj3kiH1lOciTDpzfO%2f9j95NIGuk%3d&risl=&pid=ImgRaw";
  constructor() { }

  ngOnInit(): void {
  }

}
