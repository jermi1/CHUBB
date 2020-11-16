import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormAccesosComponent } from './cliente-form-accesos.component';

describe('ClienteFormAccesosComponent', () => {
  let component: ClienteFormAccesosComponent;
  let fixture: ComponentFixture<ClienteFormAccesosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteFormAccesosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFormAccesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
