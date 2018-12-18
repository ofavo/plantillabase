import { Component, OnInit,AfterViewInit,EventEmitter,TemplateRef, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { ForfiltroPipe} from '../../forfiltro.pipe';
import { DataService} from '../../services/data.service';
//import { TableModule } from '../../modules/utils/table/table.module';
import {TableComponent} from '../../modules/utils/table/table/table.component';

import {NgModule} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/internal/Observable';

//import { TableComponent } from '../../modules/utils/table/table/table.component';
declare var $:any;
declare var $TableFilter:any;
declare var onkeyup;
declare interface antena {
  "Id": number; 
  "Nombre": string;
  "IP":string;
  "Puerto": number;
  "Lecturas": number;
  "Descripcion": string;
};

@Component({
  selector: 'app-antenas',
  templateUrl: './antenas.component.html',
  styleUrls: ['./antenas.component.scss'],

})
export class AntenasComponent extends TableComponent implements OnInit {


  values: string = '';
  antena;
  @Output() filtro;

  public testForm;
  constructor(public fb: FormBuilder, public httpclient:HttpClient,public dataservice:DataService) {
    super();
    //super(fb,httpclient,dataservice);
    this.dataservice.getdata().subscribe(data => {
      this.antena = data;
      console.log(this.antena);
    });
   }
  
  ngOnInit() {
   this.sel= false;
    const ipPattern = 
    "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
    this.testForm = this.fb.group({
      inp: ['0.0.0.0', Validators.pattern(ipPattern)]
    });

 }

      

  setfiltrado(filtro){
    this.filtro = filtro;
   $('#example').DataTable();
  console.log(filtro)
  }
    
   

}
