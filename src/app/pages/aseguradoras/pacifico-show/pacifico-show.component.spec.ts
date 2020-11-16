import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacificoShowComponent } from './pacifico-show.component';

describe('PacificoShowComponent', () => {
  let component: PacificoShowComponent;
  let fixture: ComponentFixture<PacificoShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacificoShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacificoShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
