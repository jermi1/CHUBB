import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizasDataTableComponent } from './polizas-data-table.component';

describe('PolizasTableComponent', () => {
  let component: PolizasDataTableComponent;
  let fixture: ComponentFixture<PolizasDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolizasDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizasDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
