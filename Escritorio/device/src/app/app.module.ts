import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { DashboardModule } from 'src/app/modules/dashboard/dashboard.module';
import { HttpUtilsModule } from 'src/app/modules/http-utils/http-utils.module';
import { FormModule } from './modules/utils/form/form.module';
//import { TableModule } from './modules/utils/table/table.module';
import { TeetimeModule } from './modules/utils/teetime/teetime.module';
import { ToastrModule } from 'ngx-toastr';
import { HttpModule } from '@angular/http';
import { FormComponent } from './modules/utils/form/form/form.component';
import { InputComponent } from './utils/component/input/input.component';
import { ButtonComponent } from './utils/component/button/button.component';
import { SelectComponent } from './utils/component/select/select.component';
import { DateComponent } from './utils/component/date/date.component';
import { RadiobuttonComponent } from './utils/component/radiobutton/radiobutton.component';
import { CheckboxComponent } from './utils/component/checkbox/checkbox.component';
import { DynamicFieldDirective } from './utils/component/dynamic-field.directive';
import { DynamicFormComponent } from './utils/component/dynamic-form/dynamic-form.component';
import { TestComponent } from './components/test/test.component';
import { LeftbarService } from './services/leftbar.service';
import { OperacionesComponent } from './models/operaciones/operaciones.component';
import { AntenasComponent } from './models/antenas/antenas.component';
import { CamarasComponent } from './models/camaras/camaras.component';
import { AbridorComponent } from './models/abridor/abridor.component';
import { DataService} from '../app/services/data.service';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { CircuitoComponent } from '../app/models/circuito/circuito.component';
import { ForfiltroPipe } from './forfiltro.pipe';
import { TableComponent} from '../app/modules/utils/table/table/table.component';
import { NotifierModule } from 'angular-notifier';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    TestComponent,
    OperacionesComponent,
    AntenasComponent,
    CamarasComponent,
    AbridorComponent,
    CircuitoComponent,
    ForfiltroPipe,TableComponent,
   ],
  imports: [
    NotifierModule,
    BrowserModule,
    HttpUtilsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
   // TableModule,
   
    FormModule,
    DashboardModule,
    RouterModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    TeetimeModule,
    NgxPaginationModule,
    NotifierModule.withConfig( {
      // Custom options in here
    } )

   ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [ HttpUtilsModule, LeftbarService, DataService ],
  bootstrap: [AppComponent],
  entryComponents: [
    FormComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent],
})
export class AppModule { }
