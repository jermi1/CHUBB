import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobranzasCardComponent } from './cobranzas-card.component';

describe('CobranzasCardComponent', () => {
  let component: CobranzasCardComponent;
  let fixture: ComponentFixture<CobranzasCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CobranzasCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobranzasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
