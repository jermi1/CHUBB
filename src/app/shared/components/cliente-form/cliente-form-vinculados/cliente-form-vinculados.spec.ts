import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormVinculadosComponent } from './cliente-form-vinculados.component';

describe('ClienteFormVinculadosComponent', () => {
  let component: ClienteFormVinculadosComponent;
  let fixture: ComponentFixture<ClienteFormVinculadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteFormVinculadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFormVinculadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
