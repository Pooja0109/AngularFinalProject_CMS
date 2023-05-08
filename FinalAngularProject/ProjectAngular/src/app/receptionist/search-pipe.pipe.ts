import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(searchKey: any,type: string): any {
    if(type=="")
    return searchKey;

    return searchKey.filter((x:any)=>(x.firstname.toUpperCase())==type.toUpperCase())
  }

}
