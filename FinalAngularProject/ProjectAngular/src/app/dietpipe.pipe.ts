import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dietpipe'
})
export class DietpipePipe implements PipeTransform {
  transform(dietKey: any,type: string): any {
    if(type=="")
    return " ";

    return dietKey.filter((x:any)=>(x.name)==type)
  }


}
