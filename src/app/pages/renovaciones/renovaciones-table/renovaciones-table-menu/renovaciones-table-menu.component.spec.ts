import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovacionesTableMenuComponent } from './renovaciones-table-menu.component';

describe('RenovacionesTableMenuComponent', () => {
  let component: RenovacionesTableMenuComponent;
  let fixture: ComponentFixture<RenovacionesTableMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RenovacionesTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovacionesTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
