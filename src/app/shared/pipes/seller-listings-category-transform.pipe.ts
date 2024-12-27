import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sellerListingsCategoryTransform',
})
export class SellerListingsCategoryTransformPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return value
      .split('-')
      .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
}
