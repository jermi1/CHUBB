import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteShowSiniestrosComponent } from './cliente-show-siniestros.component';

describe('ClienteShowSiniestrosComponent', () => {
  let component: ClienteShowSiniestrosComponent;
  let fixture: ComponentFixture<ClienteShowSiniestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteShowSiniestrosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteShowSiniestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
