import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionesCierresComponent } from './comisiones-cierres.component';

describe('ComisionesCierresComponent', () => {
  let component: ComisionesCierresComponent;
  let fixture: ComponentFixture<ComisionesCierresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComisionesCierresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionesCierresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
