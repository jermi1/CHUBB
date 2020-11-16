import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaShowDetalleComponent } from './poliza-show-detalle.component';

describe('PolizaShowDetalleComponent', () => {
  let component: PolizaShowDetalleComponent;
  let fixture: ComponentFixture<PolizaShowDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaShowDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaShowDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
