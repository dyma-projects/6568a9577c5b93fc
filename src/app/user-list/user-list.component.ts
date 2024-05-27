import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public users!: string[];

  constructor() // il faut probablement injecter un service ici !
  {}

  ngOnInit() {
    // il faut initialiser les users ici avec le service
  }
}
