import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AseguradoraThumbComponent } from './aseguradora-thumb.component';

describe('AseguradoraThumbComponent', () => {
  let component: AseguradoraThumbComponent;
  let fixture: ComponentFixture<AseguradoraThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AseguradoraThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AseguradoraThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
