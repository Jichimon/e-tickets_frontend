import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleSectorComponent } from './handle-sector.component';

describe('HandleSectorComponent', () => {
  let component: HandleSectorComponent;
  let fixture: ComponentFixture<HandleSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleSectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
