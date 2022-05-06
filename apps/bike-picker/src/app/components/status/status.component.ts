import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class StatusComponent {
  bikeForm = this.controlContainer;

  constructor(private controlContainer: ControlContainer) {}

  get controls() {
    return Object.keys((this.controlContainer as NgForm)?.controls ?? {});
  }
}
