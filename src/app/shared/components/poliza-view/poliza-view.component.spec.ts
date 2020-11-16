import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaViewComponent } from './poliza-view.component';

describe('PolizaViewComponent', () => {
  let component: PolizaViewComponent;
  let fixture: ComponentFixture<PolizaViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
