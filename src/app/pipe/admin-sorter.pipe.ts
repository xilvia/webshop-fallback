import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminSorter'
})
export class AdminSorterPipe implements PipeTransform {

  transform(baseArray: any, orderDirection:number = 1, key:string): any {  
    return baseArray.sort((a,b)=>{
      if( typeof a[key] === 'number' ){
        return (a[key]-b[key]) * orderDirection;
      }
      return a[key].localeCompare(b[key]) * orderDirection;
    })
  }

}
