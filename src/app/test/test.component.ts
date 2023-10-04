import { Component, OnInit } from '@angular/core';


interface Person{
  name:string,
  age:number
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})


export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  doWork(){
    console.clear();
    console.log("Working");

    var str: string = "aabbbcccc";
    var dict : Map<string,number>  =  new Map<string,number>() ;//=  new Map<string , number>;
    //dict.set('a',1);
    str.split('').forEach(e => {
        if(dict.has(e)){
          let t = dict.get(e) || 0;
          dict.set(e.toString(), t+1);
        }
        else
          dict.set(e.toString(),1);
    });
    
  }

}
