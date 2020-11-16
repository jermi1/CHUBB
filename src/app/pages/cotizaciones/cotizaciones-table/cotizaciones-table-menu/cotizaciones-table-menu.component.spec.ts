import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionesTableMenuComponent } from './cotizaciones-table-menu.component';

describe('CotizacionesTableMenuComponent', () => {
  let component: CotizacionesTableMenuComponent;
  let fixture: ComponentFixture<CotizacionesTableMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CotizacionesTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionesTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
