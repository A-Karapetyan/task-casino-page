import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class HttpService {

	constructor(
		private http: HttpClient,
	) { }

  public get(url: string, params?: HttpParams | any, headers?: HttpHeaders): Observable<any> {
		return this.http.get(this.getFullUrl(url), { params, headers });
	}

	public post(url: string, params?: HttpParams | any, headers?: HttpHeaders): Observable<any> {
		return this.http.get(this.getFullUrl(url), { params, headers });
	}

	public put(url: string, params?: HttpParams | any, headers?: HttpHeaders): Observable<any> {
		return this.http.get(this.getFullUrl(url), { params, headers });
	}

	public delete(url: string, params?: HttpParams | any, headers?: HttpHeaders): Observable<any> {
		return this.http.get(this.getFullUrl(url), { params, headers });
	}

  	private getFullUrl(url: string) {
    	return environment.baseUrl + url;
  	}
}
