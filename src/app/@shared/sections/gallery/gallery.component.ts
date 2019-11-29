import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images = [
    {
      src: '/assets/images/gallery-1.jpg',
      thumb: '/assets/images/gallery-1.jpg'
    },
    {
      src: '/assets/images/gallery-2.jpg',
      thumb: '/assets/images/gallery-2.jpg'
    },
    {
      src: '/assets/images/gallery-3.jpg',
      thumb: '/assets/images/gallery-3.jpg'
    },
    {
      src: '/assets/images/gallery-4.jpg',
      thumb: '/assets/images/gallery-4.jpg'
    }
  ];

  constructor(private _lightbox: Lightbox) {}

  ngOnInit() {}

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this.images, index , {
      disableScrolling: true,
      centerVertically: true,
      albumLabel: true,
    });
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
