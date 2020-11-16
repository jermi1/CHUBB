import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustadoresCardComponent } from './ajustadores-card.component';

describe('AjustadoresCardComponent', () => {
  let component: AjustadoresCardComponent;
  let fixture: ComponentFixture<AjustadoresCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AjustadoresCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustadoresCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
