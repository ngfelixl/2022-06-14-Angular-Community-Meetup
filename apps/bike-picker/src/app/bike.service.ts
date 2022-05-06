import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Bike } from './interfaces/bike';

@Injectable({ providedIn: 'root' })
export class BikeService implements CanActivate {
  bike: Bike | null = null;
  viewModel: Bike = {
    bikeType: 'road',
    breakType: 'diskBreak',
    manufacturer: 'ROSE',
    frontWheelSize: 28,
    frontWheelColor: '#652C06',
    rearWheelSize: 28,
    rearWheelColor: '#652C06',
    frameSize: 56,
    frameThickness: 15,
    frameColor: '#dd1b16',
    frameMaterial: 'aluminum',
    engine: 'TIAGRA',
    engineRearRings: 9,
    engineFrontRings: 2,
    equipPedals: false,
    equipLights: false,
  };

  constructor(private router: Router) {}

  buy() {
    this.bike = { ...this.viewModel };
    this.router.navigate(['/summary']);
  }

  canActivate() {
    if (this.bike === null) {
      return this.router.parseUrl('/');
    }
    return true;
  }
}
