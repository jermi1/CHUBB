import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaShowComisionesComponent } from './poliza-show-comisiones.component';

describe('PolizaShowComisionesComponent', () => {
  let component: PolizaShowComisionesComponent;
  let fixture: ComponentFixture<PolizaShowComisionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaShowComisionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaShowComisionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
