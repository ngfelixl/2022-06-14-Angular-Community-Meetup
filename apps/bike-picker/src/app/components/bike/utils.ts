import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Bike } from '../../interfaces/bike';

export const calculatePrice = (bike: Bike): number => {
  return (
    price.type[bike.bikeType] +
    price.manufacturer[bike.manufacturer] +
    price.frameMaterial[bike.frameMaterial] +
    price.break[bike.breakType] +
    (bike.equipLights ? 50 : 0) +
    (bike.equipPedals ? 80 : 0)
  );
};

export const calculateWeight = (bike: Bike): number => {
  return (
    weight.type[bike.bikeType] +
    weight.size[bike.frameSize] +
    weight.break[bike.breakType] +
    (bike.equipLights ? 0.5 : 0)
  );
};

const price = {
  type: {
    city: 300,
    road: 800,
    mountain: 600,
  },
  manufacturer: {
    ROSE: 200,
    CUBE: 0,
    SPECIALIZED: 100,
    CANNONDALE: 100,
    PEGASUS: -100,
  },
  frameMaterial: {
    aluminum: 0,
    carbon: 500,
  },
  break: {
    wheelBreak: 0,
    diskBreak: 40,
  },
};

const weight = {
  type: {
    road: 7,
    city: 12,
    mountain: 14,
  },
  size: {
    54: -0.5,
    56: 0,
    58: 0.5,
    60: 1,
  },
  break: {
    wheelBreak: 0,
    diskBreak: 0.3,
  },
};

export const fadeAnimation = trigger('fade', [
  state('void', style({ opacity: 0 })),
  state('*', style({ opacity: 1 })),
  transition(':enter', [animate('.3s ease-out')]),
  transition(':leave', [animate('.3s ease-out')]),
]);
