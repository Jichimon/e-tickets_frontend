import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleLocationComponent } from './handle-location.component';

describe('HandleLocationComponent', () => {
  let component: HandleLocationComponent;
  let fixture: ComponentFixture<HandleLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
