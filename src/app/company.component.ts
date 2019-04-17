import { Component } from '@angular/core';

@Component({
  selector: 'company-template',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  company = "Our Clients";
  x: {};
  constructor() {
    let x: {string};
    this.x = {
      "assets/images/comp-1.webp"
      "assets/images/comp-2.webp"
      "assets/images/comp-3.webp"
      "assets/images/comp-4.webp"}
      "assets/images/comp-5.webp"}
      "assets/images/comp-6.webp"}
  }
}
