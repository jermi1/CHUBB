import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguradoraShowComponent } from './aseguradora-show.component';

describe('AseguradoraShowComponent', () => {
  let component: AseguradoraShowComponent;
  let fixture: ComponentFixture<AseguradoraShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AseguradoraShowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AseguradoraShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
