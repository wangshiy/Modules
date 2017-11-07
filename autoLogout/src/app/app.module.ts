import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { enableProdMode } from '@angular/core';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';


// enableProdMode();

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    routing,
  ],
  declarations: [
    AppComponent,
  ],
})

export class AppModule {

}
