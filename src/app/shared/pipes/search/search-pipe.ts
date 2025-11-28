import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../interfaces/products';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(allProudct: Product[], searchWord: string): Product[] {
    // Custome Pipe Search Word
    return allProudct.filter((ele) => ele.title.toLowerCase().includes(searchWord.toLowerCase()));
  }
}
