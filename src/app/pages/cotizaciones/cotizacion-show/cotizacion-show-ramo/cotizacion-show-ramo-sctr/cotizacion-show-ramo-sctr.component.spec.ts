import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionShowRamoSctrComponent } from './cotizacion-show-ramo-sctr.component';

describe('CotizacionShowRamoSctrComponent', () => {
  let component: CotizacionShowRamoSctrComponent;
  let fixture: ComponentFixture<CotizacionShowRamoSctrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionShowRamoSctrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionShowRamoSctrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
