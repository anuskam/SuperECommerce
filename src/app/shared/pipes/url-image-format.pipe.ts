import { Pipe, PipeTransform } from '@angular/core';
// import { IThumbnail } from '../../core/interfaces/IThumbnail.interface';

@Pipe({
  name: 'urlImageFormat',
})
export class UrlImageFormatPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(thumbnail: any): string {
    if (!thumbnail || !thumbnail.path || !thumbnail.extension) {
      return 'Invalid path';
    }

    return `${thumbnail.path}.${thumbnail.extension}`;
  }
}
