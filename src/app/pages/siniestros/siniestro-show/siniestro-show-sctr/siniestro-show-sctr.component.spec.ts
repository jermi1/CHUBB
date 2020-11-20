import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestroShowSctrComponent } from './siniestro-show-sctr.component';

describe('SiniestroShowSctrComponent', () => {
  let component: SiniestroShowSctrComponent;
  let fixture: ComponentFixture<SiniestroShowSctrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiniestroShowSctrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestroShowSctrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
