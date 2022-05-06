import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BikeService } from '../../bike.service';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.component.html',
  styleUrls: ['./picker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PickerComponent {
  bike = this.bikeService.viewModel;

  constructor(private bikeService: BikeService) {}

  buy() {
    this.bikeService.buy();
  }
}
