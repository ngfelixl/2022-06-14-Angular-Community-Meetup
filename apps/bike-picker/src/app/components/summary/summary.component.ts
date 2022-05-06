import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BikeService } from '../../bike.service';
import { Bike } from '../../interfaces/bike';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent {
  bike: Bike | null = this.bikeService.bike;

  constructor(private bikeService: BikeService) {}
}
