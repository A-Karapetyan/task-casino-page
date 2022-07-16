import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root',
})
export abstract class ApiService {

  public abstract controller: string;

	constructor(
    public httpService: HttpService,
    ) {
  }
}
