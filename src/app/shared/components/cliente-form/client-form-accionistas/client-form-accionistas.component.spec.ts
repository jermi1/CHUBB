import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormAccionistasComponent } from './client-form-accionistas.component';

describe('ClientFormAccionistasComponent', () => {
  let component: ClientFormAccionistasComponent;
  let fixture: ComponentFixture<ClientFormAccionistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientFormAccionistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormAccionistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
