import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'photos',
  templateUrl: './photoalbum.component.html',
  styleUrls: ['./photoalbum.component.css']
})
export class PhotoalbumComponent implements OnInit {

  myPhotos: any[] =[
    {
        title: "When I think I have a good question and I ask Nizar.",
        imageUrl: "https://i.imgur.com/9UkNLy8.gif"
    },
    {
      title: "When Nizar covers a new topic.",
      imageUrl: "https://i.imgur.com/0LHLT1p.gif"
    },
    {
        title: "Leaving class every Friday.",
        imageUrl: "https://i.imgur.com/Hnge9rt.gif"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
