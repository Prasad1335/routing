import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  people: any[] = [
    {
      "title": "Card title first","descriptipn": "Some quick example text to build on the card title and make up the bulk of the card's content."
    }
    // {
    //   "title": "Card title second","descriptipn": "Some quick example text to build on the card title and make up the bulk of the card's content."
    // },
    // {
    //   "title": "Card title third","descriptipn": "Some quick example text to build on the card title and make up the bulk of the card's content."
    // },
   
  ];

}
