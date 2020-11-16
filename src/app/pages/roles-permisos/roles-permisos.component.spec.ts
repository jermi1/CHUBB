import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifariosComponent } from './roles-permisos.component';

describe('TarifariosComponent', () => {
  let component: TarifariosComponent;
  let fixture: ComponentFixture<TarifariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarifariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarifariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
