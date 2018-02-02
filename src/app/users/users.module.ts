import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './register.component';
import { SignInComponent } from './sign-in.component';

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'register', component: RegisterComponent, },
      { path: 'sign-in', component: SignInComponent, }
    ])
  ],
  exports: [],
  providers: [],
  declarations: [
    RegisterComponent,
    SignInComponent
  ]
})
export class UsersModule {

}
