import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeDatePipe'
})
export class CustomeDatePipePipe implements PipeTransform {

  transform(dateUp: any,type: string): any {
    if(type=="")
    return dateUp;
    console.log("Datessss:",dateUp)
    console.log("Datessss:",type)
    var date=new Date(type).toISOString();
    console.log("Date....",date)
    // console.log("Todayyyy:",date.getUTCFullYear())
    // console.log("Todayyyy:",date.getUTCMonth())
    return dateUp.filter((x:any)=>(x.appoint.substring(0,10))==date.substring(0,10))
    
  }

}
