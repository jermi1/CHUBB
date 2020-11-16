import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestrosCardComponent } from './siniestros-card.component';

describe('SiniestrosCardComponent', () => {
  let component: SiniestrosCardComponent;
  let fixture: ComponentFixture<SiniestrosCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiniestrosCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestrosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
