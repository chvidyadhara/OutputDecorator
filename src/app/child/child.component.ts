import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServOutputService } from '../serv-output.service';
import { SampleService } from '../sample.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() mydata = new EventEmitter();
  udata;
  outdata
  sk;
  constructor(private serv: ServOutputService,private asfa:SampleService) {
    
   }

  userdis() {
      this.serv.countriesdata().subscribe(result => {
      this.udata = result;
      console.log(this.udata) 
      this.mydata.emit(this.udata);

    })
  }
  ngOnInit() {
    this.userdis();
  }

}
