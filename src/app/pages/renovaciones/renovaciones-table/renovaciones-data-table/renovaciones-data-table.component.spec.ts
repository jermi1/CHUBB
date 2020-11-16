import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovacionesDataTableComponent } from './renovaciones-data-table.component';

describe('RenovacionesTableComponent', () => {
  let component: RenovacionesDataTableComponent;
  let fixture: ComponentFixture<RenovacionesDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RenovacionesDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovacionesDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
