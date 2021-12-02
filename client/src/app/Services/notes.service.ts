import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  
  baseUrl = 'https://localhost:44372/api/';


  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.baseUrl + 'notes');
  }

  create(model: any) {
    return this.http.post(this.baseUrl + 'notes', model);
  }

  delete(id) {
    return this.http.delete(this.baseUrl + `notes/${id}`);
  }



}
