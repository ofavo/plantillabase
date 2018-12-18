import { Component, OnInit,AfterViewInit,EventEmitter,TemplateRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { NgxPaginationModule} from 'ngx-pagination';
import{ DataService} from '../../services/data.service';

import {NgModule} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableComponent } from '../../modules/utils/table/table/table.component';
declare var $:any;
declare interface camara {
  "id": number; 
  "nombre": string;
  "ip":string;
  "puerto": number;
  "descripcion": string;
  "acciones":string;
};
@Component({
  selector: 'app-camaras',
  templateUrl: './camaras.component.html',
  styleUrls: ['./camaras.component.scss'],

  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  


})
export class CamarasComponent extends TableComponent implements OnInit {
  
  new: any;
  public temp;
  acciones: any = "acciones ";
  @Input() p: number = 1;

  camara;
  tecla_final: string;
  patron;
  tecla ;

  @Input() form1; 
  @Input() ip; 
  @Input() sel: boolean = false;
  

  public testForm;
     
  constructor(private fb: FormBuilder,  public httpclient:HttpClient,private dataservice:DataService) {
   super();
    this.dataservice.getdata().subscribe(data => {
      this.camara = data;
      console.log(this.camara);
    });
   }

  ngOnInit(): void {
 this.sel= false;
    const ipPattern = 
    "(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
    this.testForm = this.fb.group({
      inp: ['0.0.0.0', Validators.pattern(ipPattern)]

    });
 
  }


 
}





