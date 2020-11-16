import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionesCreateComponent } from './comisiones-create.component';

describe('ComisionesCreateComponent', () => {
  let component: ComisionesCreateComponent;
  let fixture: ComponentFixture<ComisionesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComisionesCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
