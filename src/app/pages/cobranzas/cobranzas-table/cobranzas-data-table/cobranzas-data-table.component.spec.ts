import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobranzasDataTableComponent } from './cobranzas-data-table.component';

describe('CobranzasTableComponent', () => {
  let component: CobranzasDataTableComponent;
  let fixture: ComponentFixture<CobranzasDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CobranzasDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobranzasDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
