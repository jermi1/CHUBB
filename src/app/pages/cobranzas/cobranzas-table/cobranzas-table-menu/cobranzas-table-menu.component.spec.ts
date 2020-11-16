import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobranzasTableMenuComponent } from './cobranzas-table-menu.component';

describe('CobranzasTableMenuComponent', () => {
  let component: CobranzasTableMenuComponent;
  let fixture: ComponentFixture<CobranzasTableMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CobranzasTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobranzasTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
