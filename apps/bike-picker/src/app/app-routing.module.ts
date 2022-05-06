import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BikeService } from './bike.service';
import { BreakComponent } from './components/form/break/break.component';
import { EngineComponent } from './components/form/engine/engine.component';
import { EquipmentComponent } from './components/form/equipment/equipment.component';
import { FrameComponent } from './components/form/frame/frame.component';
import { WheelsComponent } from './components/form/wheels/wheels.component';
import { HomeComponent } from './components/home/home.component';
import { PickerComponent } from './components/picker/picker.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  {
    path: 'pick-a-bike',
    component: PickerComponent,
    children: [
      { path: 'break', component: BreakComponent },
      { path: 'engine', component: EngineComponent },
      { path: 'wheels', component: WheelsComponent },
      { path: 'frame', component: FrameComponent },
      { path: 'equipment', component: EquipmentComponent },
      { path: '**', redirectTo: 'frame' },
    ],
  },
  {
    path: 'summary',
    component: SummaryComponent,
    canActivate: [BikeService]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
