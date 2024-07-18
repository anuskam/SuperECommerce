import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageErrorUrl'
})
export class ImageErrorUrlPipe implements PipeTransform {

  transform(src: string): string {
    return src;
  }

}
