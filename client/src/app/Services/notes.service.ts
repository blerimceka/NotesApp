import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  baseUrl = 'https://localhost:44372/api/';

  constructor(private http: HttpClient) { }


  create(model: any) {
    return this.http.post(this.baseUrl + 'notes', model);
  }



}
