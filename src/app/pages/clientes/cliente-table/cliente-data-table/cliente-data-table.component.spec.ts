import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDataTableComponent } from './cliente-data-table.component';

describe('ClienteTableComponent', () => {
  let component: ClienteDataTableComponent;
  let fixture: ComponentFixture<ClienteDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
