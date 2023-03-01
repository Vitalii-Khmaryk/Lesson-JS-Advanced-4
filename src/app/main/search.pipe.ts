import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from './main.component';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(arrUser: IUser[], maininp: string): IUser[] {
    if (!arrUser) {
      return [];
    }
    if (!maininp) {
      return arrUser;
    }
    if (maininp.includes('0')) {
      return arrUser.filter((user) =>
        user.number.toLowerCase().includes(maininp.toLowerCase())
      );
    }
    for (const i of arrUser) {
      if (maininp.includes(i.lastname.slice(0, 1).toLocaleLowerCase())) {
        return arrUser.filter((user) =>
          user.lastname.toLowerCase().includes(maininp.toLowerCase())
        );
      }
    }
    return arrUser.filter((user) =>
      user.firstname.toLowerCase().includes(maininp.toLowerCase())
    );
  }
}
