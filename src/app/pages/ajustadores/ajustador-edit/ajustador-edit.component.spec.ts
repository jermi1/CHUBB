import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustadorEditComponent } from './ajustador-edit.component';

describe('AjustadorEditComponent', () => {
  let component: AjustadorEditComponent;
  let fixture: ComponentFixture<AjustadorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AjustadorEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustadorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
