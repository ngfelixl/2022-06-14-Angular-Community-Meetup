import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { BikeComponent } from './components/bike/bike.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { PickerComponent } from './components/picker/picker.component';
import { StatusComponent } from './components/status/status.component';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    BikeComponent,
    PickerComponent,
    SummaryComponent,
    StatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
