import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Covid19seService {

  constructor(private http:HttpClient) { }
  public covid19Reports(){
   return this.http.get("https://coronavirus-19-api.herokuapp.com/countries");
  }
}