import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';
import { deflate } from 'zlib';

@Pipe({
  name: 'color',
})
export class ColorPipe implements PipeTransform {
  transform(color: number): string {
    switch (color) {
      case 0:
        return 'black';
      case 1:
        return 'green';
      case 2:
        return 'blue';
      case 3:
        return 'red';
      default:
        return '';
    }
  }
}
