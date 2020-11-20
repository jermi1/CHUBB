import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestroShowSiniestroCgComponent } from './siniestro-show-siniestro-cg.component';

describe('SiniestroShowSiniestroCgComponent', () => {
  let component: SiniestroShowSiniestroCgComponent;
  let fixture: ComponentFixture<SiniestroShowSiniestroCgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiniestroShowSiniestroCgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestroShowSiniestroCgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
