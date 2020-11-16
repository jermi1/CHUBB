import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionShowRamoVidaComponent } from './cotizacion-show-ramo-vida.component';

describe('CotizacionShowRamoVidaComponent', () => {
  let component: CotizacionShowRamoVidaComponent;
  let fixture: ComponentFixture<CotizacionShowRamoVidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionShowRamoVidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionShowRamoVidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
