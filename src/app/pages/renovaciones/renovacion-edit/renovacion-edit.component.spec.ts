import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovacionEditComponent } from './renovacion-edit.component';

describe('RenovacionEditComponent', () => {
  let component: RenovacionEditComponent;
  let fixture: ComponentFixture<RenovacionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RenovacionEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovacionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
