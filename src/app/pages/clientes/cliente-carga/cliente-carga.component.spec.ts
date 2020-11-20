import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCargaComponent } from './cliente-carga.component';

describe('ClienteCargaComponent', () => {
  let component: ClienteCargaComponent;
  let fixture: ComponentFixture<ClienteCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
