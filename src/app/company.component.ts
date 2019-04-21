import { Component } from '@angular/core';

@Component({
  selector: 'company-template',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  company = "Your favourite brands";
  
  array = [
    {src:"../assets/images/comp-1.webp"},
    {src:"../assets/images/comp-2.webp"},
    {src:"../assets/images/comp-3.webp"},
    {src:"../assets/images/comp-4.webp"},
    {src:"../assets/images/comp-5.webp"},
    {src:"../assets/images/comp-6.webp"}
  ];
}
