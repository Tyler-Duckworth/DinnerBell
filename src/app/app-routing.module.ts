import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'client', loadChildren: './client/client.module#ClientPageModule' },
  { path: 'new-event', loadChildren: './new-event/new-event.module#NewEventPageModule' },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'account', loadChildren: './account/account.module#AccountPageModule' },
  { path: 'nav', loadChildren: './nav/nav.module#NavPageModule' }

  // { path: 'new-event-modal', loadChildren: './new-event-modal/new-event-modal.module#NewEventModalPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
