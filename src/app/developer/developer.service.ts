import { Injectable } from '@angular/core';
import { Developer } from './developer';
import { Language } from './language';

@Injectable()
export class DeveloperService {
  public developers: Developer[] = [
    new Developer('John', 'Hurly', 'johnhurly@gmail.com', 'hurlyjohn', 'yes', [
      new Language('Angular 2'),
      new Language('Node JS'),
      new Language('Mongo DB')
    ]),
    new Developer('John', 'Tran', 'tran@gmail.com', 'tranny', 'no', [
      new Language('Angular 2'),
      new Language('Node JS'),
      new Language('Mongo DB')
    ]),
    new Developer('John', 'Hurly-2', 'john2@gmail.com', 'hhhurly', 'yes', [
      new Language('Angular 2'),
      new Language('Node JS'),
      new Language('Mongo DB')
    ])
  ];

  constructor() { }

  getDevelopers() {
    return this.developers;
  }

  getDeveloper(index: number) {
    return this.developers[index];
  }

  addDeveloper(newDeveloper: Developer) {
    this.developers.push(newDeveloper);
    console.log(this.developers);
  }

  removeLastItem() {
    this.developers.splice(-1, 1);
  }

}


/*
new Language('Angular 2'),
      new Language('Node JS'),
      new Language('Mongo DB')




 */