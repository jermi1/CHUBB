import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustadorShowComponent } from './ajustador-show.component';

describe('AjustadorShowComponent', () => {
  let component: AjustadorShowComponent;
  let fixture: ComponentFixture<AjustadorShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AjustadorShowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustadorShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
