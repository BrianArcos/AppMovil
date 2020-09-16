import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  map: mapboxgl .Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 0.8147717;
  lng = -77.7369835;

  

  constructor() {

    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpYW5ndGkiLCJhIjoiY2tiMzF2OGw5MDJwZjJzcWNwZHJoNXJyZiJ9.lDnbCNeuM2PZ8iWTKr4TzQ';
   }

    
  ngOnInit() {}

  ionViewDidEnter(){
  this.buildMap();
  }

  buildMap(){
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 12,
      center:[this.lng, this.lat]
      // center: [-74.5, 40], // starting position
      
      
    });
    console.log(this.map)
    this.map.addControl(new mapboxgl.NavigationControl());

    new mapboxgl.Marker()
  .setLngLat([ this.lng, this.lat ])
  .addTo(this.map);

  new mapboxgl.Marker()
  .setLngLat([-77.7365412 , 0.8141119 ])
  .addTo(this.map);
  }

}
