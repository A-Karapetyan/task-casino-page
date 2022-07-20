import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyListComponent } from './components/empty-list/empty-list.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../http/http.service';

@NgModule({
  declarations: [EmptyListComponent, LoadingComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpService],
  exports: [EmptyListComponent, LoadingComponent],
})
export class SharedModule { }
