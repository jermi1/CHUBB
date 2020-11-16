import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormContactoComponent } from './cliente-form-contacto.component';

describe('ClienteFormContactoComponent', () => {
  let component: ClienteFormContactoComponent;
  let fixture: ComponentFixture<ClienteFormContactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteFormContactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFormContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
