import { Injectable } from '@angular/core';
import { TrackList } from './track-list';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MindsList } from './minds-list';

@Injectable({
  providedIn: 'root'
})
export class TracksService {

  private _urlGet: string = 'http://localhost:3000/getcaps';
  private _urlGetAll: string = 'http://localhost:3000/get';
  private _urlPost: string = 'http://localhost:3000/post';

  constructor(private _http:HttpClient) { }

  getTrackWithName(mindsList:MindsList): Observable<any> {
    let param = new HttpParams();
    param = param.append('track', mindsList.mindTrack);
    return this._http.get<any>(this._urlGet, {params : param});
  }

  getTracks(): Observable<TrackList[]> {
    let param = new HttpParams();
    // param = param.append('track', mindsList.mindTrack);
    return this._http.get<TrackList[]>(this._urlGetAll);
  }

  postTracks(trackList:TrackList):Observable<TrackList[]>{
    return this._http.post<TrackList[]>(this._urlPost,trackList)
  }

}