import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormGeneralComponent } from './cliente-form-general.component';

describe('ClienteFormGeneralComponent', () => {
  let component: ClienteFormGeneralComponent;
  let fixture: ComponentFixture<ClienteFormGeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteFormGeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFormGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
