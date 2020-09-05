import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery-9';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  city = {
    id: 1,
    name: "Istanbul",
    url: "https://www.dreamofholiday.com/userFiles/bolgeler/950205793_1588435982.jpg",
    description: "Dünyanın en eski şehirlerinden biri olan İstanbul, 330-395 yılları arasında Roma İmparatorluğu, 395-1204 yılları arasında Bizans İmparatorluğu, 1204-1261 yılları arasında Latin İmparatorluğu,1261-1453 yılları arasında tekrar Bizans İmparatorluğu ve son olarak 1453-1922 yılları arasında Osmanlı İmparatorluğu'na başkentlik yaptı.[12] Ayrıca İstanbul, Hilâfetin Osmanlı İmparatorluğu'na geçtiği 1517'den kaldırıldığı 1924'e kadar İslam dünyasının da merkezi oldu"
  };
  photos = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.city = this.getCityById(params["cityId"])
      console.log(params["cityId"])
    })
    this.setGallery();
  }

  getCityById(cityId) {
    return this.city;
  }

  getImages() {
    const imageUrls = [];
    for (let i = 0; i < this.photos.length; i++) {
      imageUrls.push({
        small: this.photos[i].url,
        medium: this.photos[i].url,
        big: this.photos[i].url
      })
    }
    return imageUrls;
  }

  setGallery() {
    this.galleryOptions = [
      {
        width: '100%',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ];

    this.galleryImages = [
      {
        small: 'https://www.dreamofholiday.com/userFiles/bolgeler/950205793_1588435982.jpg',
        medium: 'https://www.dreamofholiday.com/userFiles/bolgeler/950205793_1588435982.jpg',
        big: 'https://www.dreamofholiday.com/userFiles/bolgeler/950205793_1588435982.jpg'
      },
      {
        small: 'https://birparcatuhaftik.com/wp-content/uploads/2019/11/istanbul-1.jpg',
        medium: 'https://birparcatuhaftik.com/wp-content/uploads/2019/11/istanbul-1.jpg',
        big: 'https://birparcatuhaftik.com/wp-content/uploads/2019/11/istanbul-1.jpg'
      }, {
        small: 'https://im.haberturk.com/2019/08/30/ver1567226646/2517777_810x458.jpg',
        medium: 'https://im.haberturk.com/2019/08/30/ver1567226646/2517777_810x458.jpg',
        big: 'https://im.haberturk.com/2019/08/30/ver1567226646/2517777_810x458.jpg'
      },
    ];
  }



}
