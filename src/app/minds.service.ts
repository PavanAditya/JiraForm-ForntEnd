import { Injectable } from '@angular/core';
import { MindsList } from './minds-list';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MindsService {

  private _urlGet: string = 'http://localhost:3000/getm';
  private _urlPost: string = 'http://localhost:3000/postm';
  
  constructor(private _http: HttpClient) { }

  getMinds(): Observable<MindsList[]> {
    return this._http.get<MindsList[]>(this._urlGet);
  }

  postMinds(mindsList:MindsList):Observable<MindsList[]>{
    return this._http.post<MindsList[]>(this._urlPost,mindsList)
  }

}
