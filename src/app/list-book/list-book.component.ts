import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../book/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  //@Autowired
  //BookService bookService; 


  constructor(private http: HttpClient, private bookService:BookService) { 
    console.log("ListBookComponent constructor");
  }

  ngOnInit(): void {
    console.log("Lifecycle Init method");
    this.getBooks();
  }

  books!:any[];

  title:string = "";

  // authors = ["Naresh","Siva","Kathy Sierra"]
  authors:any;

  getBooks(){
    //const url = "http://localhost:3000/books";
    //this.http.get(url).subscribe ( (res:any)=>{
      this.authors = [];
      this.bookService.getAllBooks().subscribe( (res:any)=>{
      console.log(res);
      this.books = res;
      for(let book of this.books){
        let authorName = book.author;
        //check if the authorName is already added to the authorsList
        if(!this.authors.includes(authorName)){
          this.authors.push(authorName);
        }
      }
    });
  }

  searchByPrice(){
    //todo
  }

}
