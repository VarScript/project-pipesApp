export enum Color {
  black,
  green,
  blue,
  red,
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color;
}
