import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifariosEditComponent } from './tarifarios-edit.component';

describe('TarifariosEditComponent', () => {
  let component: TarifariosEditComponent;
  let fixture: ComponentFixture<TarifariosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifariosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifariosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
