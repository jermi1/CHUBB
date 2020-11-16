import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionesCreateComponent } from './cotizaciones-create.component';

describe('CotizacionesCreateComponent', () => {
  let component: CotizacionesCreateComponent;
  let fixture: ComponentFixture<CotizacionesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CotizacionesCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
