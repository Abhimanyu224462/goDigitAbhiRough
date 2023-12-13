import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars.component';
import { CarsBrandComponent } from './cars-brand/cars-brand.component';
import { CarsModelComponent } from './cars-model/cars-model.component';
import { CarsVarientComponent } from './cars-varient/cars-varient.component';

const routes: Routes = [{ path: '', component: CarsComponent },
{path:'carsBrand', component:CarsBrandComponent},
{path: 'carsModel', component:CarsModelComponent},
{path: 'carsVarient', component:CarsVarientComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
