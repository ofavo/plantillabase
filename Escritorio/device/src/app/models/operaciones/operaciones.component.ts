import { Component, OnInit, Output, Input } from '@angular/core';
import { DataService} from '../../services/data.service';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material';
import { isoStringToDate } from '@angular/common/src/i18n/format_date';
declare interface operations {
  
  desde?:string;
  hasta:string;
}

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.scss']
})
export class OperacionesComponent implements OnInit {

  operacion: Object;
  @Output() desde:string ;
  @Output() cuantas:string;
  @Input() desdes:string ;
  imprime;
  public url ;
  public url2 ='http://mearenera.zippyttech.com:3000/v1/operations?skip=0"&limit=80';

  constructor(private fb: FormBuilder, public httpclient:HttpClient,private dataservice:DataService) { 

    this.dataservice.getdata2(this.url2).subscribe( data => {
      this.operacion = data;
      console.log(this.operacion);
    });
  }

  ngOnInit() {

  }
 
  hora(hora){
    var date = new Date(hora);
   
    var c= date.toString();
 
    return c
  }
  respuestas(respuesta){
   var d;
    switch(respuesta){  
      case 201 : 
      return "Creada";
      case 400:
      return "Bad Request";
      case 500:
      return "Internal Server Error";
      case 403:
      return "No Autorizado";
      default:
      return "Desconocido";


    }
  } 
  
}