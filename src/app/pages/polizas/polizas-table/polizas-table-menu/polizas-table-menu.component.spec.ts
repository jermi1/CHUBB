import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizasTableMenuComponent } from './polizas-table-menu.component';

describe('PolizasTableMenuComponent', () => {
  let component: PolizasTableMenuComponent;
  let fixture: ComponentFixture<PolizasTableMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolizasTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizasTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
