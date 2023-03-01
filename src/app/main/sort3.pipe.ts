import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './main.component';
@Pipe({
  name: 'sort3'
})
export class Sort3Pipe implements PipeTransform {

  transform(arrUser: IUser[], sort3:string): IUser[] {
    if (!arrUser) {
      return [];
    }
    if (!sort3) {
      return arrUser;
    }
    if (sort3==='asc3') {
      return arrUser.sort((a,b)=>{
        if(a.number<b.number){
          return -1;
        }
        if (a.number>b.number) {
          return 1
        }
        return 0;
      });
    }
   
    return arrUser.sort((a,b)=>{
      if(a.number>b.number){
        return -1;
      }
      if (a.number<b.number) {
        return 1
      }
      return 0;
    });
    
  }

}
