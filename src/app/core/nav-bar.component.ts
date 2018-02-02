import { Component } from '@angular/core';

import { UserRepositoryService } from './user.repository.service';

@Component({
  selector: 'wb-nav-bar',
  styleUrls: [`./nav-bar.component.css`],
  templateUrl: './nav-bar.component.html'
})

export class NavBarComponent {
  constructor(private userRepositoryService: UserRepositoryService) { }

  get currentUser() {
    return this.userRepositoryService.currentUser;
  }

  handleSignOut(): void {
    this.userRepositoryService.currentUser = null;
  }
}
