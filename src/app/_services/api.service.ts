import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
rateapi ="https://dev.kwayisi.org/apis/forex/ghs"

  constructor(private http: HttpClient) { }


  forex(){
    return this.http.get(this.rateapi)
  }
}
