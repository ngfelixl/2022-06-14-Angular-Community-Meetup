import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { BikeService } from '../../../bike.service';

@Component({
  selector: 'app-break',
  templateUrl: './break.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreakComponent {
  bike = this.bikeService.viewModel;

  constructor(private bikeService: BikeService) {}
}
