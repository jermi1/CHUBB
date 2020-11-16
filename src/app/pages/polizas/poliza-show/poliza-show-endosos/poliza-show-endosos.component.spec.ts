import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaShowEndososComponent } from './poliza-show-endosos.component';

describe('PolizaShowEndososComponent', () => {
  let component: PolizaShowEndososComponent;
  let fixture: ComponentFixture<PolizaShowEndososComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolizaShowEndososComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaShowEndososComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
