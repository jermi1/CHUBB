import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenovacionesCreateComponent } from './renovaciones-create.component';

describe('RenovacionesCreateComponent', () => {
  let component: RenovacionesCreateComponent;
  let fixture: ComponentFixture<RenovacionesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RenovacionesCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenovacionesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
