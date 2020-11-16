import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustadoresTableMenuComponent } from './ajustadores-table-menu.component';

describe('AjustadoresTableMenuComponent', () => {
  let component: AjustadoresTableMenuComponent;
  let fixture: ComponentFixture<AjustadoresTableMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AjustadoresTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustadoresTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
