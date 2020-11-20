import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaCargaComponent } from './poliza-carga.component';

describe('PolizaCargaComponent', () => {
  let component: PolizaCargaComponent;
  let fixture: ComponentFixture<PolizaCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
