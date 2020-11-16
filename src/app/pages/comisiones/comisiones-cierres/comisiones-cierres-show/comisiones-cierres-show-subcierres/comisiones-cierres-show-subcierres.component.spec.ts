import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionesCierresShowSubcierresComponent } from './comisiones-cierres-show-subcierres.component';

describe('ComisionesCierresShowSubcierresComponent', () => {
  let component: ComisionesCierresShowSubcierresComponent;
  let fixture: ComponentFixture<ComisionesCierresShowSubcierresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComisionesCierresShowSubcierresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionesCierresShowSubcierresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
