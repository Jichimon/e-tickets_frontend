import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EventService } from '../services/event.service';
import { EventInterface } from '../models/event.model';
import { EventStatus } from '../models/eventStatus.model';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})


export class CreateEventComponent implements OnInit {

  //attribs

  createEventRequestForm = new FormGroup(
    {
      Nombre: new FormControl(),
      Descripcion: new FormControl()
    }
  );
  constructor(
    private eventService: EventService
  ) { }

  ngOnInit(): void {

    this.onSubmitCreateEventForm();
  }

  example_EventModelRequest : EventInterface = {
    Nombre: 'pruebas',
    Descripcion: 'ahora se tiene que subir este tipo de datos al servidor para probar. revisar por favor.',
    EventStatus: EventStatus.EVENT_CREATED,
    Categoria: 
    {
      IdCategory: 0,
      Nombre: 'Concierto',
      Descripcion: 'Eventos Musicales con distintos sectores',
      CategoryStatus: 1
    },
    Imagenes: [],
    Lugares: 
    [
      {
        Direccion: 'Estadio Real Santa Cruz',
        CapacidadTotal: 5000,
        Fechas: 
        [
          '19/06/2022 20:00:00:00',
          '20/06/2022 20:00:00:00',
          '21/06/2022 20:00:00:00'
        ],
        Sectores: 
        [
          {
            Nombre: 'Cancha',
            Capacidad: 3000,
            Precio: 350.00,
            EsNumerado: false,
            EspaciosNumerados: []
          },
          {
            Nombre: 'Vip',
            Capacidad: 1000,
            Precio: 700.00,
            EsNumerado: false,
            EspaciosNumerados: []
          },
          {
            Nombre: 'Grada',
            Capacidad: 998,
            Precio: 300.00,
            EsNumerado: false,
            EspaciosNumerados: []
          },
          {
            Nombre: 'Heaven',
            Capacidad: 2,
            Precio: 3500.00,
            EsNumerado: true,
            EspaciosNumerados: 
            [
              {
                Codigo: 'A1',
                Estado: 1
              },
              {
                Codigo: 'A2',
                Estado: 1
              }
            ]
          }
        ]
      }
    ]
  };

  

  onSubmitCreateEventForm(){
    this.eventService.apiCallCreateEvent(this.example_EventModelRequest);
  }

}
