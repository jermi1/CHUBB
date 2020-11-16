import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionShowRamoAutosComponent } from './cotizacion-show-ramo-autos.component';

describe('CotizacionShowRamoAutosComponent', () => {
  let component: CotizacionShowRamoAutosComponent;
  let fixture: ComponentFixture<CotizacionShowRamoAutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionShowRamoAutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionShowRamoAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
