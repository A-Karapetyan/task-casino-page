import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpService } from './http/http.service';
import { GameCardComponent } from './components/game-card/game-card.component';
import { LoadingComponent } from './components/loading/loading.component';
import { PricePipe } from './pipes/price.pipe';
import { EmptyListComponent } from './components/empty-list/empty-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    GameCardComponent,
    LoadingComponent,
    PricePipe,
    EmptyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
