import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestrosDataTableComponent } from './siniestros-data-table.component';

describe('SiniestrosTableComponent', () => {
  let component: SiniestrosDataTableComponent;
  let fixture: ComponentFixture<SiniestrosDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiniestrosDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestrosDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
