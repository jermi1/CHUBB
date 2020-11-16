import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionShowRamoOtrosComponent } from './cotizacion-show-ramo-otros.component';

describe('CotizacionShowRamoOtrosComponent', () => {
  let component: CotizacionShowRamoOtrosComponent;
  let fixture: ComponentFixture<CotizacionShowRamoOtrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionShowRamoOtrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionShowRamoOtrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
