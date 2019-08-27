import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminFilter'
})
export class AdminFilterPipe implements PipeTransform {

  transform(baseArray: any=[], phrase:string="", counter:number) {

    return baseArray.filter( product => {return JSON.stringify(product).toLowerCase().indexOf(phrase.toLowerCase()) > -1})
  }

}
