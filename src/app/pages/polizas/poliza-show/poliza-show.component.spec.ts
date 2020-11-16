import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizaShowComponent } from './poliza-show.component';

describe('PolizaShowComponent', () => {
  let component: PolizaShowComponent;
  let fixture: ComponentFixture<PolizaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolizaShowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
