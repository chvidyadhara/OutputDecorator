import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  childdata
  constructor() { }
  parentMethod(data){
      this.childdata = data;
      console.log(this.childdata)
  }
  ngOnInit() {
    
      
  }

}
