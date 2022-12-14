import { Position } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-currentlocation',
  templateUrl: './currentlocation.component.html',
  styleUrls: ['./currentlocation.component.css']
})
export class CurrentlocationComponent implements OnInit {
  
  id: any;
  lat: any;
  lng: any;
  glink: any;

  constructor(private route: ActivatedRoute, private service: UserService) { 
    
    
  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.getPosition().then(pos=>
      {
        this.lat =pos.lat;
        this.lng =pos.lng;
        this.glink= "https://www.google.com/maps/?q=" + this.lat + "," + this.lng;
        
        var latlng = { lat: this.lat, lng: this.lng };

        //var socket = io.connect("http://localhost:3000");
        const socket = io("http://localhost:3000");
        socket.emit("coordinates", latlng);

      });

  }

  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {

          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        },
        err => {
          reject(err);
        });
    });

  }

}
