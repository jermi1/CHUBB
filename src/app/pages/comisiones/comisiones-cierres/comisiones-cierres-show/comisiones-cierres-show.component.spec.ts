import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionesPendientesComponent } from './comisiones-pendientes.component';

describe('ComisionesPendientesComponent', () => {
  let component: ComisionesPendientesComponent;
  let fixture: ComponentFixture<ComisionesPendientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComisionesPendientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionesPendientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
