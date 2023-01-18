import { IProduct } from './../modesl/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: IProduct[], search:string): IProduct[] {
    return products.filter(p=> p.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }

}
