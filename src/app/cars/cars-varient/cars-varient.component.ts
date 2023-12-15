import { Component } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-cars-varient',
  templateUrl: './cars-varient.component.html',
  styleUrls: ['./cars-varient.component.scss']
})
export class CarsVarientComponent {
  varientsData:any

  constructor(private http:HttpService){

  }
ngOnInit(){
  this.getData()
}

getData(){
  this.http.getDataFromServer("brands").subscribe((response:any) =>{
    if(response && response.length>0){
      this.varientsData = response
      console.log("varients data rec" , this.varientsData)
    }
  })
}

}
