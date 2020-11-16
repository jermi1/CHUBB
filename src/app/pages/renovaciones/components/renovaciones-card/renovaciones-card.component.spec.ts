import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovacionesCardComponent } from './renovaciones-card.component';

describe('RenovacionesCardComponent', () => {
  let component: RenovacionesCardComponent;
  let fixture: ComponentFixture<RenovacionesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RenovacionesCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovacionesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
