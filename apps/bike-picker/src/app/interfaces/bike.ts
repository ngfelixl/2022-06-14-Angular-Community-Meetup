export interface Bike {
  bikeType: 'road' | 'mountain' | 'city';
  breakType: 'wheelBreak' | 'diskBreak';
  manufacturer: 'ROSE' | 'CUBE' | 'CANNONDALE' | 'SPECIALIZED' | 'PEGASUS';
  frontWheelSize: number;
  frontWheelColor: string;
  rearWheelSize: number;
  rearWheelColor: string;
  frameSize: 54 | 56 | 58 | 60;
  frameThickness: number;
  frameColor: string;
  frameMaterial: 'aluminum' | 'carbon';
  engine: string;
  engineRearRings: number;
  engineFrontRings: number;
  equipPedals: boolean;
  equipLights: boolean;
}
