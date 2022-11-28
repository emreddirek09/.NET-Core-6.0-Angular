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

  get<T>(requsetParameter: Partial<RequestParameters>) {
    let url: string = "";

    if (requsetParameter.fullEndPoint)
      url = requsetParameter.fullEndPoint;
    else
      url = `${this.url(requsetParameter)}`


    return this.httpClient.get<T>(url, { headers: requsetParameter.headers })

  }
  post<T>(requsetParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {
    let url: string = "";
    if (requsetParameter.fullEndPoint)
      url = requsetParameter.fullEndPoint;
    else
      url = `${this.url(requsetParameter)}`;

    return this.httpClient.post<T>(url, body, { headers: requsetParameter.headers });

  }

  put<T>(requsetParameter: Partial<RequestParameters>, body: Partial<T>): Observable<T> {

    let url: string = "";
    if (requsetParameter.fullEndPoint)
      url = requsetParameter.fullEndPoint;
    else
      url = `${this.url(requsetParameter)}`;

    return this.httpClient.put<T>(url, body, { headers: requsetParameter.headers });
  }

  delete<T>(requsetParameter: Partial<RequestParameters>, id: string): Observable<T> {
    let url: string = "";
    if (requsetParameter.fullEndPoint)
      url = requsetParameter.fullEndPoint;
    else
      url = `${this.url(requsetParameter)}/${id}`;
    return this.httpClient.delete<T>(url, { headers: requsetParameter.headers });
  }
}


export class RequestParameters {
  controller?: string;
  action?: string;
  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
}