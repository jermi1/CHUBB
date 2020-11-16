import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestroShowComponent } from './siniestro-show.component';

describe('SiniestroShowComponent', () => {
  let component: SiniestroShowComponent;
  let fixture: ComponentFixture<SiniestroShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiniestroShowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestroShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
