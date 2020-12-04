import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.changeView('view1');
    this.changeView1('view2');
    this.changeView2('view3');
    this.changeView3('view4');
  }

  value:string ='slide';
  num: number = 0;
  
  newNum: number;
  
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    
  };

  num1: number = 0;
  
  newNum1: number;
  
  option1 = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    
  };




  numm: number = 0;
  
  newNumm: number;
  
  optionn = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    
  };

  nummm: number = 0;
  
  newNummm: number;
  
  optionnn = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    
  };

  interval: any;
  currentView: string;
  
  

 

  changeView(vieww) {
    if (vieww !== this.currentView) {
    
      if (this.interval)
      clearInterval(this.interval);
      if (vieww === 'view1') {
        this.newNum = 1000;
        this.num = this.newNum;
        const that = this;
        this.interval = setInterval(function(){
         
          that.option = {
            startVal: this.num,
            useEasing: false,
            duration: 30
           
          };
          that.num = that.newNum;
        })
      } 
    }
  }

  changeView3(vieww) {
    if (vieww !== this.currentView) {
    
      if (this.interval)
      clearInterval(this.interval);
      if (vieww === 'view4') {
        this.newNum1= 1500;
        this.num1 = this.newNum1;
        const that = this;
        this.interval = setInterval(function(){
          
          that.option1 = {
            startVal: this.num,
            useEasing: false,
            duration: 30
           
          };
          that.numm = that.newNum1;
        })
      } 
    }
  }
  changeView1(vieww) {
    if (vieww !== this.currentView) {
    
      if (this.interval)
      clearInterval(this.interval);
      if (vieww === 'view2') {
        this.newNumm= 2000;
        this.numm = this.newNumm;
        const that = this;
        this.interval = setInterval(function(){
          
          that.optionn = {
            startVal: this.numm,
            useEasing: false,
            duration: 30
           
          };
          that.numm = that.newNumm;
        })
      } 
    }

  }
  changeView2(vieww) {
    if (vieww !== this.currentView) {
    
      if (this.interval)
      clearInterval(this.interval);
      if (vieww === 'view3') {
        this.newNummm= 2000;
        this.nummm = this.newNummm;
        const that = this;
        this.interval = setInterval(function(){
          
          that.optionnn = {
            startVal: this.nummm,
            useEasing: false,
            duration: 30
           
          };
          that.numm = that.newNumm;
        })
      } 
    }
  }

}
