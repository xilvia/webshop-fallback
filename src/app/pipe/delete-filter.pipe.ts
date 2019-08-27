import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'deleteFilter'
})
export class DeleteFilterPipe implements PipeTransform {

  transform(baseArray: any, ids): any {
    return baseArray.filter( product=>{
      console.log(ids);
      let notFound = true
      for(let i=0; i<ids.length; i++){
        if(product.id==ids[i]){
          notFound= false;
        }
      }
      return notFound;
    })
  }
}
