import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService implements InMemoryDbService {

  constructor() { }
  createDb(){

    let  contacts =  [
      {  id:  1,  name:  'Advance Excel', Fee: '10000',email:'amol.yadav89@hotmail.com' },
      {  id:  2,  name:  'SQL', Fee: '8000',email:'amol.yadav89@hotmail.com'  },
      {  id:  3,  name:  'Python', Fee: '8000', email: 'amol.yadav89@hotmail.com' },
      {  id:  4,  name:  'JAVA', Fee: '28000', email: 'amol.yadav89@hotmail.com' },
      {  id:  5,  name:  'Computer Fundmental', Fee: '8000', email: 'amol.yadav89@hotmail.com' }
    ];
 
    return {contacts};
 
   }
}
