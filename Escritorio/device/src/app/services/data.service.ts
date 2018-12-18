import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(public httpclient: HttpClient) {
      
        console.log("Activado");
    }
    getdata() {

        return this.httpclient.get('https://jsonplaceholder.typicode.com/posts');
    } 
    getdata2(url){
        return this.httpclient.get(url);
    }
    
}