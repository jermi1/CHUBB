import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobranzaShowComponent } from './cobranza-show.component';

describe('CobranzaShowComponent', () => {
  let component: CobranzaShowComponent;
  let fixture: ComponentFixture<CobranzaShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CobranzaShowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobranzaShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
