import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionesCierresShowDetailsComponent } from './comisiones-cierres-show-details.component';

describe('ComisionesCierresShowDetailsComponent', () => {
  let component: ComisionesCierresShowDetailsComponent;
  let fixture: ComponentFixture<ComisionesCierresShowDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComisionesCierresShowDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionesCierresShowDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
