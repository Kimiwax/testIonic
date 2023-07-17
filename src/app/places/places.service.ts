import { Injectable } from '@angular/core';
import {Place} from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places: Place[] = [
    {
      id:"1",
      title: "Eiffel Tower",
      imageURL: "https://lh3.googleusercontent.com/4M4aeaq4LQwNoL7BkfnGD_BDQCUuVA2JWYXqEtuRbTnMK1kVgJcbE1KcPjHo-fDPHg",
      comments:["Awesome place", "Wonderful experience"]
    },
    {
      id:"2",
      title: "Monumento a la Bandera",
      imageURL: "https://static.hosteltur.com/app/public/uploads/img/articles/2014/07/01/L_5c1a3ba3a4834_rosario_monumento.jpg",
      comments:["Awesome place", "Wonderful experience"]
    }
  ]


  constructor() { }

  getPlaces(){
    return [...this.places]
  }

  addPlace(title: string, imageURL:string){
    this.places.push({
      title,
      imageURL,
      comments:[],
      id: this.places.length + 1 + ""
    });
  }

  deletePlace(placeID:string){
    this.places = this.places.filter(place => {
      return place.id !== placeID
    })
  }

  getPlace(placeId: string | null){
    return{
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }
}
