import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl ='https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  getPosts(page:number, limit:number):Observable<any[]>{
    return this.http.get<any[]>(`${this.apiUrl}?_page=${page}&_limit=${limit}`);
  }
}
