import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormContratanteComponent } from './cliente-form-contratante.component';

describe('ClienteFormContratanteComponent', () => {
  let component: ClienteFormContratanteComponent;
  let fixture: ComponentFixture<ClienteFormContratanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteFormContratanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFormContratanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
