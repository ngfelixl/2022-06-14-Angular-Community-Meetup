import { Component, Input } from '@angular/core';
import { Bike } from '../../interfaces/bike';
import { calculatePrice, calculateWeight, fadeAnimation } from './utils';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css'],
  animations: [fadeAnimation],
})
export class BikeComponent {
  @Input() bike!: Bike;

  get bikeStyle() {
    return `
      fill-rule: evenodd;
      clip-rule: evenodd;
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-miterlimit: 1.5;
      transform: scale(${this.bike.frameSize / 60})
    `;
  }

  get frameStyle() {
    return `
      fill:none;
      stroke:${this.bike.frameColor ?? 'black'};
      stroke-width:${this.bike.frameThickness ?? 20}px
    `;
  }

  get spokesStyle() {
    return `
      fill: none;
      stroke: ${this.bike.bikeType === 'road' ? '#444' : 'rgb(202, 202, 202)'};
      stroke-width: ${this.bike.bikeType === 'road' ? '20px' : '3.5px'}
    `;
  }

  get frontWheelStyle() {
    return `
      fill:${this.bike.frontWheelColor};
      stroke:black;
      stroke-width:24.82px;
      transform-origin: 28% 85%;
      transform: ${this.bike.bikeType === 'road' ? 'scale(1)' : 'scale(0.9)'};
    `;
  }

  get rearWheelStyle() {
    return `
      fill:${this.bike.rearWheelColor};
      stroke:black;
      stroke-width:24.82px;
      transform-origin: 28% 85%;
      transform: ${this.bike.bikeType === 'road' ? 'scale(1)' : 'scale(0.9)'};
    `;
  }

  get price() {
    return calculatePrice(this.bike);
  }

  get weight() {
    return calculateWeight(this.bike);
  }
}
