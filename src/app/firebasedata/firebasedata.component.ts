import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ParcelService } from '../parcel.service';
import { Customer } from '../parcel.service';

@Component({
  selector: 'app-firebasedata',
  templateUrl: './firebasedata.component.html',
  styleUrls: ['./firebasedata.component.css']
})
export class FirebasedataComponent implements OnInit {

  userdetail = { name: '', age: 0, gender: 'Male', address: '' };
  message = '';
  userdata: any[] = [];
  customers: Customer[] | undefined;
  customer: Customer = {
    key: null
  };

  constructor(private parcelService: ParcelService, private router: Router) {

  }

  ngOnInit(): void {
      
    this.fetchData();
  }

  fetchData() {

    // this.parcelService.getdatatoFirebase()
    //   .subscribe(
    //     res => {
          
    //       for(const d in res) {
           
    //         const dd = (<any>res)[d];
    //         const a  = {address: dd.address, age: dd.age, gender: dd.gender, name: dd.name, key: d};
    //         this.userdata.push(a);
    //       }
    //     },
    //     error => {
    //       console.log(error); // error path
    //     }
    //   );

    this.parcelService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(customers => {
      this.customers = customers;
    },
      (error) => {
        console.log(error);
      });

  }

  


  addData() {

    try {  
    this.message = 'Adding data';
    this.parcelService.createCustomer(this.customer);
    this.message = 'Data Addedd successfully.';
    }
    catch(err) {
      console.log(err);
    }
    // this.parcelService.postdatatoFirebase(this.userdetail)
    //   .subscribe(
    //     res => {
    //       const a  = {address: this.userdetail.address, age: this.userdetail.age, gender: this.userdetail.gender, name: this.userdetail.name, key: (<any>res)['name']};
    //       this.userdata.push(a);
    //       this.message = 'Data Addedd successfully.';
          
    //       //let a = res;
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
  }

  updateDataClick() {

    this.message = 'updating data';
      this.parcelService.updateCustomer(this.customer)
        .then(() => {
          // this.customers = this.customers!.filter(function (obj) {
          //   return obj.key !== keyVal;
          // });
          this.message = 'Data update successfully.';
        }
        )
        .catch(error => {
          console.log(error);
        }
        )
  }

  updateData(keyVal: string | null) {

    const custRes = this.customers!.find(obj => {
            return obj.key === keyVal;
          });

    this.customer = custRes!;
  }

  deleteData(keyVal: string | null) {
    
    //let index = this.userdata.Fin((item: { key: string; }) => item.key == keyVal);
    //this.parcelService.deleteCustomer("").
    //const index = this.userdata.findIndex((item: { key: string; }) => item.key == keyVal);
   
    if (confirm("Do want to delete this record?")) {
      this.message = 'deleting data';
      this.parcelService.deleteCustomer(keyVal!)
        .then(() => {
          // this.customers = this.customers!.filter(function (obj) {
          //   return obj.key !== keyVal;
          // });
          this.message = 'Data deleted successfully.';
        }
        )
        .catch(error => {
          console.log(error);
        }
        )
    }

    // if(confirm("Do want to delete this record?")) {
    //   this.message = 'deleting data';
    //   this.parcelService.deletedatatoFirebase(keyVal!)
    //   .subscribe(
    //     res => {

    //       this.customers = this.customers!.filter(function( obj ) {
    //         return obj.key !== keyVal;
    //     });
    //       this.message = 'Data deleted successfully.';
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   );
    // }
  }

}
