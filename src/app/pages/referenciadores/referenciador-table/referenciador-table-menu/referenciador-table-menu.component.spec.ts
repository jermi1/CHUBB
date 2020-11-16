import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciadorTableMenuComponent } from './referenciador-table-menu.component';

describe('ReferenciadorTableMenuComponent', () => {
  let component: ReferenciadorTableMenuComponent;
  let fixture: ComponentFixture<ReferenciadorTableMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenciadorTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciadorTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
