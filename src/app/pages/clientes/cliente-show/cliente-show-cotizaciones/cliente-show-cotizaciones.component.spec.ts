import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteShowCotizacionesComponent } from './cliente-show-cotizaciones.component';

describe('ClienteShowCotizacionesComponent', () => {
  let component: ClienteShowCotizacionesComponent;
  let fixture: ComponentFixture<ClienteShowCotizacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteShowCotizacionesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteShowCotizacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
