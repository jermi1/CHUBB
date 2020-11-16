import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionesDataTableComponent } from './cotizaciones-data-table.component';

describe('CotizacionesTableComponent', () => {
  let component: CotizacionesDataTableComponent;
  let fixture: ComponentFixture<CotizacionesDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CotizacionesDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionesDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
