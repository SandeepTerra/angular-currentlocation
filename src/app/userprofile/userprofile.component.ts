import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit, OnDestroy {

  buildings = [{name:"Building",isdeleted:false}];

  constructor() { 
    
  }
  

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    
    let a ="";
  }

  addBuilding() {

    //[{name:"Building",isdeleted:false}];
    this.buildings.push({name:"Building",isdeleted:false});
    
  }
  
  removeBuilding() {

    this.buildings.pop();
  }
  
  removeI(indx: number) {
    //alert(indx);
    let a= this.buildings.splice(indx-1,1);
  }

}
