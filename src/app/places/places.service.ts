import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private places = [
    {
      id:"1",
      title: "Eiffel Tower",
      imageUrl: "https://lh3.googleusercontent.com/4M4aeaq4LQwNoL7BkfnGD_BDQCUuVA2JWYXqEtuRbTnMK1kVgJcbE1KcPjHo-fDPHg",
      comments:["Awesome place", "Wonderful experience"]
    },
    {
      id:"2",
      title: "Monumento a la Bandera",
      imageUrl: "https://static.hosteltur.com/app/public/uploads/img/articles/2014/07/01/L_5c1a3ba3a4834_rosario_monumento.jpg",
      comments:["Awesome place", "Wonderful experience"]
    }
  ]


  constructor() { }

  getPlaces(){
    return [...this.places]
  }

  addPlace(title: string, imageUrl:string, comments){

  }

  deletePlace(){}

  getPlace(placeId: string){
    return{
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }
}
