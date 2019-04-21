import { Component } from '@angular/core';
import { AngularServices } from './angular-services';

@Component({
  selector: 'item-template',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  providers: [AngularServices]
})
export class ItemComponent {
  btn_action = 'Search Items';
  cart_btn = 'Check Cart';
  item_title = 'Exclusive for you';
  cart_value: string;
  
  product_id: string
  product_name: string;
  product_price: number;
  product_image: string;
  product_quantity: number;

  productList = [
    {product_id: "PROD1001", product_name: "Aquiesse Pink", product_price: 120, product_image:"../assets/images/1-thegem-portfolio-masonry.jpg", product_quantity: 25},
    {product_id: "PROD1002", product_name: "Rock Arden", product_price: 240, product_image:"../assets/images/3-thegem-portfolio-masonry.jpg", product_quantity: 25},
    {product_id: "PROD1003", product_name: "Golden Heels", product_price: 760, product_image:"../assets/images/5-thegem-portfolio-masonry.jpg", product_quantity: 25},
    {product_id: "PROD1004", product_name: "Havells Red", product_price: 430, product_image:"../assets/images/7-thegem-portfolio-masonry.jpg", product_quantity: 25},
    {product_id: "PROD1005", product_name: "Palm Black", product_price: 640, product_image:"../assets/images/9-thegem-portfolio-masonry.jpg", product_quantity: 25},
    {product_id: "PROD1006", product_name: "Acro Fem", product_price: 820, product_image:"../assets/images/11-thegem-portfolio-masonry.jpg", product_quantity: 25},
    {product_id: "PROD1007", product_name: "Mavell Highs", product_price: 190, product_image:"../assets/images/13-thegem-portfolio-masonry.jpg", product_quantity: 25},
    {product_id: "PROD1008", product_name: "Lorsem Rock", product_price: 240, product_image:"../assets/images/15-thegem-portfolio-masonry.jpg", product_quantity: 25},
    {product_id: "PROD1009", product_name: "Splendid Aura", product_price: 640, product_image:"../assets/images/17_1-thegem-portfolio-masonry-754-968.jpg", product_quantity: 25},
    {product_id: "PROD1010", product_name: "Markus Los", product_price: 460, product_image:"../assets/images/19-thegem-portfolio-masonry.jpg", product_quantity: 25},
    {product_id: "PROD1011", product_name: "Euphoria Magic", product_price: 830, product_image:"../assets/images/21-thegem-portfolio-masonry.jpg", product_quantity: 25},
    {product_id: "PROD1012", product_name: "Cemp Arden", product_price: 920, product_image:"../assets/images/23_1-thegem-portfolio-masonry.jpg", product_quantity: 25},
    {product_id: "PROD1013", product_name: "Magenta Soap", product_price: 960, product_image:"../assets/images/24_1-thegem-portfolio-masonry.jpg", product_quantity: 25},
    {product_id: "PROD1014", product_name: "Banot Shrimp", product_price: 990, product_image:"../assets/images/33-thegem-portfolio-masonry.jpg", product_quantity: 25},
    {product_id: "PROD1015", product_name: "Masho Red", product_price: 450, product_image:"../assets/images/35-thegem-portfolio-masonry.jpg", product_quantity: 25},
    {product_id: "PROD1016", product_name: "White Rock", product_price: 550, product_image:"../assets/images/49-thegem-portfolio-masonry.jpg", product_quantity: 25},
    {product_id: "PROD1017", product_name: "Arden Bush", product_price: 720, product_image:"../assets/images/53-thegem-portfolio-masonry-754-968.jpg", product_quantity: 25},
    {product_id: "PROD1018", product_name: "Zincs Pretty", product_price: 160, product_image:"../assets/images/7-thegem-portfolio-masonry.jpg", product_quantity: 25}
  ];

  cart:Array<any>=[]
  cart_total_price: number = 0;
  c_total: number = 0;
  c_item: number = 0;

  public addToCart(event, pd_id, pd_name, pd_price) {
    alert('Product with ID ' + pd_id + ' is added to your cart.');
    this.cart.push(
      {
       "Product_ID":pd_id,
       "Product_Name":pd_name,
       "Product_Price":pd_price
      });

    this.cart_total_price = this.cart_total_price + pd_price;
    this.c_total = this.cart_total_price;
    this.c_item = this.c_item + 1;

    console.log(this.cart);
  
  }
  
  /*public checkYourCart(event) {
      
  }*/

  constructor(private _angularService: AngularServices) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.cart_value = this._angularService.cartValue()
  }
}
