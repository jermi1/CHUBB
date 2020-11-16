import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionShowClienteComponent } from './cotizacion-show-cliente.component';

describe('CotizacionShowClienteComponent', () => {
  let component: CotizacionShowClienteComponent;
  let fixture: ComponentFixture<CotizacionShowClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionShowClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionShowClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
