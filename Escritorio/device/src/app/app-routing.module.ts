import { NgModule, ModuleWithProviders, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';

import { DashboardComponent } from 'src/app/modules/dashboard/dashboard/dashboard.component';
import { InitComponent } from 'src/app/modules/dashboard/init/init.component';

import { ClientsModel } from './models/clients/clients.model';
import { TableComponent } from './modules/utils/table/table/table.component';
import { VehiclesModel } from './models/vehicles/vehicles.model';
//import { TeetimeComponent } from './modules/utils/teetime/teetime/teetime.component';
import { TestComponent } from './components/test/test.component';
import { OperacionesComponent } from './models/operaciones/operaciones.component';
import { AntenasComponent } from './models/antenas/antenas.component';
import { CamarasComponent } from './models/camaras/camaras.component';
import { AbridorComponent } from './models/abridor/abridor.component';
import { CircuitoComponent } from './models/circuito/circuito.component';


const routes: Routes = [

 { 
    path: 'init',
    component: InitComponent,
   
    children:[
 {
        path: '',
        component: OperacionesComponent,
        outlet: 'principal'
 },/** 
      {
        path: 'antenas',
        
        component:  AntenasComponent,
        
        outlet: 'principal'
  
      },
      {
        path: 'camaras',
        component: CamarasComponent,
        outlet: 'principal'
      },
      {
        path: 'abridores',
        component: AbridorComponent,
        outlet: 'principal'
      },
      {
        path: 'circuito',
        component: CircuitoComponent,
        outlet: 'principal'
      },*/
    ],},
    {path:'**', redirectTo: 'init'}
];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
