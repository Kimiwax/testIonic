import { Component } from '@angular/core';
import { PhotosService } from './photos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  photos:any = [];
  constructor(private photoService: PhotosService) {}

  ngOnInit(){
    this.photoService.getPhotos().subscribe(data =>{
      //console.log(data.data);
      this.photos = data.data
    })
  }
}
