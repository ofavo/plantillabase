
import { Component, OnInit, ViewChild, Input, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormComponent } from '../../form/form/form.component';
import { UserData } from '../../../../models/clients/clients.model';
import { LeftbarComponent } from '../../../dashboard/leftbar/leftbar.component';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, pipe } from 'rxjs';
import { map, first } from 'rxjs/operators';
import { Button } from 'protractor';
//import { NotifierService } from 'angular-notifier/src/services/notifier.service';
import swal from'sweetalert2';

declare var bootbox:any;
declare var $:any;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit , AfterViewInit {

  sel: any;
 
  
  constructor( ) {
    
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
  
  }
  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }
    setocultar() {
      this.sel = !this.sel;
    // Resetear, por si acaso has estado jugando con la otra propiedad
    $('#hide-me').css('visibility', 'visible');
    
    if( $('#hide-me').is(":visible") ) {
      $('#hide-me').css('display', 'none'); 
     
    } else {
      $('#hide-me').css('display', 'block');
    
    }
    $('#hide-me2').css('visibility', 'visible');
    
    if( $('#hide-me2').is(":visible") ) {
      $('#hide-me2').css('display', 'none'); 
     
    } else {
      $('#hide-me2').css('display', 'block');
     
    } 
    return this.sel;
    }
   
    setocultar2() {
      this.sel = !this.sel;
      // Resetear, por si acaso has estado jugando con la otra propiedad
    $('#hide-me3').css('visibility', 'visible');
    
    if( $('#hide-me3').is(":visible") ) {
      $('#hide-me3').css('display', 'none'); 
     
    } else {
      $('#hide-me3').css('display', 'block');
    
    }
    $('#hide-me4').css('visibility', 'visible');
    
    if( $('#hide-me4').is(":visible") ) {
      $('#hide-me4').css('display', 'none'); 
     
    } else {
      $('#hide-me4').css('display', 'block');
     
    } 
    return this.sel;
    }
        
  
//Filtrados

//fin del filtrado

/**Funcion para Borrar */
eliminar(){
  swal({
    title: 'Esta Seguro',
    text: 'Este elemento no podra ser Recuperado',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: '#274E13',
    cancelButtonColor: 'red'     
  }).then((result) => {
    if (result.value) {
      this.onDelete();
    } else if (result.dismiss === swal.DismissReason.cancel) {
      console.log('no borro')
    }
  })
  
  
}
 onDelete(){
  console.log('Borrado');
 }
 /**Funcion modificar */
 Modicar(){

 }
 /**Funcion para guardar */
save(){

}
}



