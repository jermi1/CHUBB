import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionShowRamoComponent } from './cotizacion-show-ramo.component';

describe('CotizacionShowRamoComponent', () => {
  let component: CotizacionShowRamoComponent;
  let fixture: ComponentFixture<CotizacionShowRamoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionShowRamoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionShowRamoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
