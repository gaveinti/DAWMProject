import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  id: BehaviorSubject<string> | undefined;
  url: BehaviorSubject<string> | undefined;
  constructor() { 
    /*this.id = new BehaviorSubject()*/
  }

  setId(data: any){
    this.id=data
  }
  getId(){
    return this.id;
  }

  setUrl(data: any){
    this.url = data
  }
  getUrl(){
    return this.url
  }
}
