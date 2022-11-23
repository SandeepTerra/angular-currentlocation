import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';



@Injectable({
  providedIn: 'root'
})
export class ParcelService {

  private dbCusPath = '/customer';
  //private dbCusPath = '/property';

  customersRef: AngularFireList<Customer>;

  constructor(private http: HttpClient, private db: AngularFireDatabase) { 
    
    this.customersRef = this.db.list(this.dbCusPath);

  }

  getParcels(): Observable<Parcel[]> {

    const url = "https://localhost:44378/api/Parcel";
    return this.http.get<Parcel[]>(url);

  }

  getUsers() {
    const url = "https://localhost:44378/api/Parcel";
    
    return this.http.get<string[]>(url);
  }

  postdatatoFirebase(userdetail: any)
  {
    //const nm = Math.floor(Math.random() * 1000);
    const url ="https://ngapi-e34e4-default-rtdb.firebaseio.com/customer.json";
    //const userdetail = {name: 'User'+nm.toString(), age: 35, Gender: 'Male', Address: 'JHB'};
    return this.http.post(url,userdetail);
  }

  getdatatoFirebase()
  {
    const url ="https://ngapi-e34e4-default-rtdb.firebaseio.com/customer.json";
   
    return this.http.get(url); 
  }

  deletedatatoFirebase(key: string)
  {
    const url ="https://ngapi-e34e4-default-rtdb.firebaseio.com/customer/" + key +".json";
    //https://ngapi-e34e4-default-rtdb.firebaseio.com/customer/-N4aZkVzv3ddJRM17uJ5.json
    return this.http.delete(url);
  }
   
  createCustomer(customer: Customer) {

    return this.customersRef.push(customer);
  }

  updateCustomer(customer: Customer): Promise<void> {

    //const dbb 
    //this.db.list('d').remove("dd")
    return this.customersRef.update(customer.key!,customer);
  }

  deleteCustomer(key: string): Promise<void> {

    return this.customersRef.remove(key);
  }

  getCustomersList(): AngularFireList<Customer> {

    
    return this.customersRef;
  }

}

export interface Parcel {
  
  wkt: string;
  data: string;
  lpkey: string;
}

export interface Customer {
  address?: string;
  age?: number;
  gender?: string;
  name?: string;
  key: string | null;
}
