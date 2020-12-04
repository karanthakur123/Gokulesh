import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,NavigationEnd } from '@angular/router';

var count;
var main;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countt:string;
  mainn:string;
  constructor(
    private router: Router,

  ) { 
    this.countt=count
    this.mainn=main
    }
    
   
    
  ngOnInit() {
    
  }
  customOptions: any = {
    loop: true,
    mouseDrag: true,
    autoplay:true,
    autoplayTimeout:1500,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  submit()
  {
    count='0'
    main='1'
    this.countt=count
    this.mainn=main
    
    console.log(count)
    console.log(main)


  }
  submit1()
  {
    count='1'
    main='1'
    this.countt=count
    this.mainn=main
    console.log(count)
  }
  submit2()
  {
    count='2'
    main='1'
    this.countt=count
    this.mainn=main

    console.log(count)
  }
 
}
