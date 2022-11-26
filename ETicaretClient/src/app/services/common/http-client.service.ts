import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }

  private url(requsetParameter: Partial<RequestParameters>): string {
    return `
${requsetParameter.baseUrl ? requsetParameter.baseUrl : this.baseUrl}/
${requsetParameter.controller}${requsetParameter.action ? `/${requsetParameter.action}` : ""}`;
  }

  get<T>(requsetParameter: Partial<RequestParameters>, id?: string): Observable<T> {
    let url: string = "";
    // url= `${this.baseUrl}/${controller}/${action}`

    if (requsetParameter.fullEndPoint)
      url = requsetParameter.fullEndPoint;
    else
      url = `${this.url(requsetParameter)}${id ? `/${id}` : ""}`;

    return this.httpClient.get<T>(url, { headers: requsetParameter.headers })

  }
  post<T>(requsetParameter: Partial<RequestParameters>) 
  {
    let url:string="";
    if (requsetParameter.fullEndPoint)
      url = requsetParameter.fullEndPoint;
    else
      url = `${this.url(requsetParameter)}`;
 
  }

  put() {

  }

  delete() {

  }
}


export class RequestParameters {
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
}