import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaShowCotizacionesComponent } from './poliza-show-cotizaciones.component';

describe('PolizaShowCotizacionesComponent', () => {
  let component: PolizaShowCotizacionesComponent;
  let fixture: ComponentFixture<PolizaShowCotizacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaShowCotizacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaShowCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
