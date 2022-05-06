import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BikeService } from '../../../bike.service';

@Component({
  selector: 'app-wheels',
  templateUrl: './wheels.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class WheelsComponent {
  bike = this.bikeService.viewModel;

  constructor(private bikeService: BikeService) {}
}
