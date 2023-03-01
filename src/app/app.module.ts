import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SearchPipe } from './main/search.pipe';
import { SortPipe } from './main/sort.pipe';
import { Sort2Pipe } from './main/sort2.pipe';
import { Sort3Pipe } from './main/sort3.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SearchPipe,
    SortPipe,
    Sort2Pipe,
    Sort3Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
