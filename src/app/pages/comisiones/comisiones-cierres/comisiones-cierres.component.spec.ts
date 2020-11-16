import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionesTableHistorialCierresComponent } from './comisiones-table-historial-cierres.component';

describe('ComisionesTableHistorialCierresComponent', () => {
  let component: ComisionesTableHistorialCierresComponent;
  let fixture: ComponentFixture<ComisionesTableHistorialCierresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComisionesTableHistorialCierresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionesTableHistorialCierresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
