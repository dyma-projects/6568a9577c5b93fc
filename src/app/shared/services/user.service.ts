import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users$: BehaviorSubject<string[]> = new BehaviorSubject([]);

  constructor() {}

  addUser(user: string) {
    const currentList = this.users$.value;
    currentList.push(user);
    this.users$.next(currentList);
  }
}
