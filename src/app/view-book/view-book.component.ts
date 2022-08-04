import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book/book.service';
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {

  id!:number;

  //Dependency Injection ( Angular Container creates an object and injects it)
  constructor(private route:ActivatedRoute, private http:HttpClient, private bookService:BookService,
    private orderService: OrderService) {
    this.id = this.route.snapshot.params["id"];
  }
  
  ngOnInit(): void {
    console.log("View Book:" + this.id);
    this.getBook();
  }

  book:any;

  getBook(){
   //const url = "http://localhost:3000/books/" + this.id;
   //this.http.get(url).subscribe(( res:any)=>{
    this.bookService.getBook(this.id).subscribe ( (res:any)=>{
        this.book = res;
    }) ;
  }

  addToCart(book:any){
    console.log("Placing an order", book);
    //alert("Added item to cart");

    let quantity = 1;
    let totalPrice = book.price * quantity;

    let orderObj = {
      item_name : book.title + "-" + book.isbn + "-" + book.id,
      quantity: quantity,
      total_price: totalPrice,
      ordered_date : new Date().toJSON(),
      status:"ORDERED"
    };

    console.log(orderObj);

    //const url = "http://localhost:3000/orders";
    //this.http.post(url, orderObj).subscribe( (res:any)=>{
    this.orderService.createOrder(orderObj).subscribe ( (res:any)=>{
      console.log(res);
      alert("Successfully Placed an Order");
    });

    //localstorage (or) backend api

  }

}
