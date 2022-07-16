import { Component, OnInit } from '@angular/core';
import { HttpService } from './http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  constructor(private httpService: HttpService) {

  }
  ngOnInit(): void {
    this.httpService.get('games.php').subscribe(res => console.log(res));
  }


}
