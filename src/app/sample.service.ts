import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleService {
  x;
  constructor() {}

  userdata(){
     this.x = "satya";
  }


}
