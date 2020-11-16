import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormComisionesComponent } from './cliente-form-comisiones.component';

describe('ClienteFormComisionesComponent', () => {
  let component: ClienteFormComisionesComponent;
  let fixture: ComponentFixture<ClienteFormComisionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteFormComisionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFormComisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
