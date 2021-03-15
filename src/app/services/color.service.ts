import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorResponseModel } from '../models/colorResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = 'https://localhost:44382/api/color/getall';

  constructor(private httpClient: HttpClient) { }

  getColors():Observable<ColorResponseModel> {
   return this.httpClient.get<ColorResponseModel>(this.apiUrl);
     
}
}
