import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventRoutingModule } from './event-routing.module';
import { MaterialModule } from '../material/material.module';
import { HandleLocationComponent } from './handle-location/handle-location.component';
import { HandleSectorComponent } from './handle-sector/handle-sector.component';
import { LocationDirective } from './directives/location.directive';
import { SectorDirective } from './directives/sector.directive';
import { EventService } from './services/event.service';



@NgModule({
  declarations: [
    CreateEventComponent,
    HandleLocationComponent,
    HandleSectorComponent,
    LocationDirective,
    SectorDirective
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    MaterialModule
  ],
  providers: [
    EventService
  ]
})
export class EventModule { }
