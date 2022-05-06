import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BikeService } from './bike.service';
import { HomeComponent } from './components/home/home.component';
import { PickerComponent } from './components/picker/picker.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'pick-a-bike', component: PickerComponent },
  { path: 'summary', component: SummaryComponent, canActivate: [BikeService] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
