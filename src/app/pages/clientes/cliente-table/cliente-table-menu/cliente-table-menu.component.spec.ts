import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteTableMenuComponent } from './cliente-table-menu.component';

describe('ClienteTableMenuComponent', () => {
  let component: ClienteTableMenuComponent;
  let fixture: ComponentFixture<ClienteTableMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
