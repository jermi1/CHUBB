import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciadorShowCotizacionesComponent } from './referenciador-show-cotizaciones.component';

describe('ReferenciadorShowCotizacionesComponent', () => {
  let component: ReferenciadorShowCotizacionesComponent;
  let fixture: ComponentFixture<ReferenciadorShowCotizacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenciadorShowCotizacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciadorShowCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
