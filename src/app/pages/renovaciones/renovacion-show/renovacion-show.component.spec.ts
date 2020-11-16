import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovacionShowComponent } from './renovacion-show.component';

describe('RenovacionShowComponent', () => {
  let component: RenovacionShowComponent;
  let fixture: ComponentFixture<RenovacionShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RenovacionShowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovacionShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
