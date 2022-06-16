import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { EventModule } from './event/event.module';
import { UserModule } from './user/user.module';

const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => AuthModule
  },
  {
    path: 'user',
    loadChildren: () => UserModule
  },
  {
    path: 'event',
    loadChildren: () => EventModule
  },
  {
    path:'**',
    redirectTo:'event'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
