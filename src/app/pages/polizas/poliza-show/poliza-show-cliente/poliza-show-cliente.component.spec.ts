import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaShowClienteComponent } from './poliza-show-cliente.component';

describe('PolizaShowClienteComponent', () => {
  let component: PolizaShowClienteComponent;
  let fixture: ComponentFixture<PolizaShowClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaShowClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaShowClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
