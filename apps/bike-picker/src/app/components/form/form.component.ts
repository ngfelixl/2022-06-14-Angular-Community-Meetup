import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Bike } from '../../interfaces/bike';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  @Input() bike!: Bike;
}
