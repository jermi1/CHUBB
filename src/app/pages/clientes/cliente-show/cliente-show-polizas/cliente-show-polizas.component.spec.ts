import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteShowPolizasComponent } from './cliente-show-polizas.component';

describe('ClienteShowPolizasComponent', () => {
  let component: ClienteShowPolizasComponent;
  let fixture: ComponentFixture<ClienteShowPolizasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteShowPolizasComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteShowPolizasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
