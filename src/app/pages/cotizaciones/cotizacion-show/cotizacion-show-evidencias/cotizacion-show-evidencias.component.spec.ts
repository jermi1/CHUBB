import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionShowEvidenciasComponent } from './cotizacion-show-evidencias.component';

describe('CotizacionShowEvidenciasComponent', () => {
  let component: CotizacionShowEvidenciasComponent;
  let fixture: ComponentFixture<CotizacionShowEvidenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionShowEvidenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionShowEvidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
