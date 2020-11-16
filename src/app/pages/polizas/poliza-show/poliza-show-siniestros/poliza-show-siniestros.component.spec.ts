import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaShowSiniestrosComponent } from './poliza-show-siniestros.component';

describe('PolizaShowSiniestrosComponent', () => {
  let component: PolizaShowSiniestrosComponent;
  let fixture: ComponentFixture<PolizaShowSiniestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaShowSiniestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaShowSiniestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
