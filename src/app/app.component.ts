import { Component } from '@angular/core';
var count=0;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chooran';
  constructor() { 
    this.loadScripts(); 
  } 
  
  // Method to dynamically load JavaScript 
  loadScripts() { 
  
    // This array contains all the files/CDNs 
    const dynamicScripts = [ 
    
      'assets/js/slide.js',
      
      
    
    ]; 
    for (let i = 0; i < dynamicScripts.length; i++) { 
    const node = document.createElement('script'); 
    node.src = dynamicScripts[i]; 
    node.type = 'text/javascript'; 
    node.async = false; 
    document.getElementsByTagName('head')[0].appendChild(node); 
    } 
  }
  statusClass = 'not-active';

  setActiveClass(){
    if(count==0)
    {
      this.statusClass = 'active';
      count=1
    }
    else
    {
      this.statusClass = 'not-active';
      count=0;
    }

    
}

}