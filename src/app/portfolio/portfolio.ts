import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-portfolio',
  imports: [RouterLink],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
   imgsSrc : string[] = [
      "portfolio_imgs/pic1.png" ,
      "portfolio_imgs/pic2.png" ,
      "portfolio_imgs/pic3.png" ,
      "portfolio_imgs/pic4.png" ,
      "portfolio_imgs/pic5.png" ,
      "portfolio_imgs/pic6.png" ,

  ]
}
