import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustadoresDataTableComponent } from './ajustadores-data-table.component';

describe('AjustadoresTableComponent', () => {
  let component: AjustadoresDataTableComponent;
  let fixture: ComponentFixture<AjustadoresDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AjustadoresDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustadoresDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
