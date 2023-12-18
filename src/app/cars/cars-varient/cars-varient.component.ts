import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-cars-varient',
  templateUrl: './cars-varient.component.html',
  styleUrls: ['./cars-varient.component.scss']
})
export class CarsVarientComponent {
  varientsData:any
  varientsFuelData:any

  constructor(private http:HttpService){

  }
ngOnInit(){
  this.getData()
  this.FuelData()
}

getData(){
  this.http.getDataFromServer("get-variant").subscribe((response:any) =>{
    if(response && response.length>0){
      this.varientsData = response
      console.log("varients data rec" , this.varientsData)
    }
  })
}

FuelData(){
  this.http.getDataFromServer("get-variant").subscribe((response1:any) =>{
    if(response1 && response1.length>0){
      this.varientsFuelData = response1
      console.log("varients Fuel data rec" , this.varientsFuelData)
    }
  })
}


diesel:boolean = true
petrol:boolean = false
valid:boolean = false

SelectedPreference(){
  this.valid = !this.valid
}
}
