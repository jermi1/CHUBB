import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormTitularComponent } from './cliente-form-titular.component';

describe('ClienteFormTitularComponent', () => {
  let component: ClienteFormTitularComponent;
  let fixture: ComponentFixture<ClienteFormTitularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteFormTitularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFormTitularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
