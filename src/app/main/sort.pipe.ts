import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './main.component';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(arrUser: IUser[], sort: string): IUser[] {
    if (!arrUser) {
      return [];
    }
    if (!sort) {
      return arrUser;
    }
    if (sort === 'asc') {
      return arrUser.sort((a, b) => {
        if (a.firstname < b.firstname) {
          return -1;
        }
        if (a.firstname > b.firstname) {
          return 1;
        }
        return 0;
      });
    }

    return arrUser.sort((a, b) => {
      if (a.firstname > b.firstname) {
        return -1;
      }
      if (a.firstname < b.firstname) {
        return 1;
      }
      return 0;
    });
  }
}
