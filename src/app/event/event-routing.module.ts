import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';

const routes: Routes = [

  {
    path: 'create',
    component: CreateEventComponent
  },
  {
    path: '**',
    redirectTo: 'create'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }