/// <reference types="@types/googlemaps" />

import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  @ViewChild('gmap', { static: false }) gmap: ElementRef;
  map: google.maps.Map;

  lat = 40.73061;
  lng = -73.935242;

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8
  };

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
  }

  ngAfterViewInit() {
    this.mapInitializer();
  }
}
