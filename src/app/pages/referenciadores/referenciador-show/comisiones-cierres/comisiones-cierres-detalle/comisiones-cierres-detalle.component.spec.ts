import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionesCierresDetalleComponent } from './comisiones-cierres-detalle.component';

describe('ComisionesCierresDetalleComponent', () => {
  let component: ComisionesCierresDetalleComponent;
  let fixture: ComponentFixture<ComisionesCierresDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComisionesCierresDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionesCierresDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
