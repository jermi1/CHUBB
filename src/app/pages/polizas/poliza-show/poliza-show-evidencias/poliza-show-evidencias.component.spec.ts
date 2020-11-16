import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaShowEvidenciasComponent } from './poliza-show-evidencias.component';

describe('PolizaShowEvidenciasComponent', () => {
  let component: PolizaShowEvidenciasComponent;
  let fixture: ComponentFixture<PolizaShowEvidenciasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaShowEvidenciasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaShowEvidenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
