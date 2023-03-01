import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public perem = false;
  public userArray: IUser[] = [
    {
      firstname: 'Pavlo',
      lastname: 'Pavliv',
      number: '0632233114',
    },
    {
      firstname: 'Petro',
      lastname: 'Petriv',
      number: '0672100914',
    },
    {
      firstname: 'Alejandro',
      lastname: 'Del Rio',
      number: '0612116764',
    },
    {
      firstname: 'Alex',
      lastname: 'Venci',
      number: '0672115554',
    },
    {
      firstname: 'Alina',
      lastname: 'Paniv',
      number: '0682113334',
    },
    {
      firstname: 'Oleg',
      lastname: 'Denov',
      number: '0652112221',
    },
  ];
  public fnameModal!: string;
  public snameModal!: string;
  public numnameModal!: string;
  public redborder!: string;
  public fnameRegExp: RegExp = /^\w\D{1,16}$/;
  public snameRegExp: RegExp = /^\w\D{1,16}$/;
  public numnameRegExp: RegExp = /^0\d{9}$/;
  public editIndex!: number;
  public ngifForSave = true;
  public cross = false;
  public maininp!: string;
  public type = 'asc';
  public type2 = 'asc2';
  public type3 = 'asc3';
  public peremSort!: boolean;
  public peremSort2!: boolean;
  public peremSort3!: boolean;
  public ngcontainer = false;
  public ngcontainer2 = false;
  public ngcontainer3 = false;
  arrowChange(): void {
    this.ngcontainer = true;
    this.ngcontainer2 = false;
    this.ngcontainer3 = false;
    this.peremSort = !this.peremSort;
  }
  arrowChange2(): void {
    this.ngcontainer2 = true;
    this.ngcontainer = false;
    this.ngcontainer3 = false;
    this.peremSort2 = !this.peremSort2;
  }
  arrowChange3(): void {
    this.ngcontainer3 = true;
    this.ngcontainer = false;
    this.ngcontainer2 = false;
    this.peremSort3 = !this.peremSort3;
  }

  focusCross(): void {
    this.cross = true;
  }
  blur(): void {
    setTimeout(() => {
      this.cross = false;
    }, 500);
  }
  crossclick(): void {
    this.maininp = '';
  }
  adder(): void {
    this.ngifForSave = true;
    this.fnameModal = '';
    this.snameModal = '';
    this.numnameModal = '';
    this.perem = true;
    this.redborder = 'grayborder';
  }
  closed(): void {
    this.perem = false;
  }
  saver(): void {
    if (
      this.fnameRegExp.test(this.fnameModal) &&
      this.snameRegExp.test(this.snameModal) &&
      this.numnameRegExp.test(this.numnameModal)
    ) {
      let obj = {
        firstname: this.fnameModal,
        lastname: this.snameModal,
        number: this.numnameModal,
      };
      this.userArray.push(obj);
      this.perem = false;
      this.fnameModal = '';
      this.snameModal = '';
      this.numnameModal = '';
      this.redborder = 'grayborder';
    } else {
      this.redborder = 'redBorder';
    }
  }

  deleter(index: number): void {
    this.userArray.splice(index, 1);
  }
  editer(index: number): void {
    this.fnameModal = this.userArray[index].firstname;
    this.snameModal = this.userArray[index].lastname;
    this.numnameModal = this.userArray[index].number;
    this.editIndex = index;
    this.perem = true;
    this.ngifForSave = false;
    this.redborder = 'grayborder';
  }
  editsaver(): void {
    if (
      this.fnameRegExp.test(this.fnameModal) &&
      this.snameRegExp.test(this.snameModal) &&
      this.numnameRegExp.test(this.numnameModal)
    ) {
      this.userArray[this.editIndex].firstname = this.fnameModal;
      this.userArray[this.editIndex].lastname = this.snameModal;
      this.userArray[this.editIndex].number = this.numnameModal;
      this.fnameModal = '';
      this.snameModal = '';
      this.numnameModal = '';
      this.perem = false;
      this.ngifForSave = true;
    } else {
      this.redborder = 'redBorder';
    }
  }
  changeSort(type: string): void {
    this.type = type;
  }
  changeSort2(type2: string): void {
    this.type2 = type2;
  }
  changeSort3(type3: string): void {
    this.type3 = type3;
  }
}
export interface IUser {
  firstname: string;
  lastname: string;
  number: string;
}
