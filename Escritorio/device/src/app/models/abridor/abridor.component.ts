import { Component, OnInit,AfterViewInit,EventEmitter,TemplateRef, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';

import {NgModule} from '@angular/core';
import { TableComponent } from '../../modules/utils/table/table/table.component';
declare var $:any;

@Component({
  selector: 'app-abridor',
  templateUrl: './abridor.component.html',
  styleUrls: ['./abridor.component.scss'],

  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AbridorComponent extends TableComponent implements OnInit {


  tecla_final: string;
  patron;
  tecla ;

  @Input() form1; 
  @Input() ip; 
  @Input() sel: boolean = false;
 
  public testForm;
  constructor(private fb: FormBuilder) {
    super();
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
