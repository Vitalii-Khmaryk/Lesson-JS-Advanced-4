import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './main.component';
@Pipe({
  name: 'sort2',
})
export class Sort2Pipe implements PipeTransform {
  transform(arrUser: IUser[], sort2: string): IUser[] {
    if (!arrUser) {
      return [];
    }
    if (!sort2) {
      return arrUser;
    }
    if (sort2 === 'asc2') {
      return arrUser.sort((a, b) => {
        if (a.lastname < b.lastname) {
          return -1;
        }
        if (a.lastname > b.lastname) {
          return 1;
        }
        return 0;
      });
    }

    return arrUser.sort((a, b) => {
      if (a.lastname > b.lastname) {
        return -1;
      }
      if (a.lastname < b.lastname) {
        return 1;
      }
      return 0;
    });
  }
}
