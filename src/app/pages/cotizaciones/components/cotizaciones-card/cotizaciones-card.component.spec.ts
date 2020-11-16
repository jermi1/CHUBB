import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionesCardComponent } from './cotizaciones-card.component';

describe('CotizacionesCardComponent', () => {
  let component: CotizacionesCardComponent;
  let fixture: ComponentFixture<CotizacionesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CotizacionesCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
