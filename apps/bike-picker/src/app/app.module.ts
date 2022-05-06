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
import { EquipmentComponent } from './components/form/equipment/equipment.component';
import { BreakComponent } from './components/form/break/break.component';
import { EngineComponent } from './components/form/engine/engine.component';
import { WheelsComponent } from './components/form/wheels/wheels.component';
import { FrameComponent } from './components/form/frame/frame.component';
import { TabsComponent } from './components/tabs/tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    BikeComponent,
    PickerComponent,
    SummaryComponent,
    StatusComponent,
    EquipmentComponent,
    BreakComponent,
    EngineComponent,
    WheelsComponent,
    FrameComponent,
    TabsComponent,
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
