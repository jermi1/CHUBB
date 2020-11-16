import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolizasCardComponent } from './polizas-card.component';

describe('PolizasCardComponent', () => {
  let component: PolizasCardComponent;
  let fixture: ComponentFixture<PolizasCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolizasCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolizasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
