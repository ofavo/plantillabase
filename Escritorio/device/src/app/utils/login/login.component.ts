import { Http,Headers } from '@angular/http';
import { Component, OnInit, ChangeDetectorRef, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpModule } from '@angular/http/src/http_module';

 //import {NgProgressService} from "ng2-progressbar";
declare const $:any;11
declare interface LoginCredentials{
    use_nic?: string; // required, must be 5-8 characters
    password?: string; // required, value must be equal to confirm password.
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ ]
})
export class LoginComponent implements OnInit, DoCheck {

    ngDoCheck(): void {
     
        this.altura = $(window).height();
    }
  test : Date = new Date();
    public altura;
   public credentials: LoginCredentials;
   public isLogged = false;
   /* @FUNCTION: checkLoginCredentials
    * @PARAMETERS : event
    * @USE: check if a user exist and can loggin
   */
   
  constructor(private router:Router, public http:Http, public cd: ChangeDetectorRef){}
  checkLoginCredentials (model: LoginCredentials, isValid: boolean){  
    let that = this;
    
 
} 

  checkFullPageBackgroundImage(){
      var $page = $('.full-page');
      var image_src = $page.data('image');

      if(image_src !== undefined){
          var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
          $page.append(image_container);
      }
  }
 
  ngOnInit(){
    
      this.checkFullPageBackgroundImage();
      //localStorage.setItem("isLogged",this.isLogged)
      setTimeout(function(){
          // after 1000 ms we add the class animated to the login/register card
          $('.card').removeClass('card-hidden');
      }, 700)

      this.credentials = {
        use_nic: '',
        password: ''
        
      }    
      
  

    }
    

  
}

