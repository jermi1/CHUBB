import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestrosCreateComponent } from './siniestros-create.component';

describe('SiniestrosCreateComponent', () => {
  let component: SiniestrosCreateComponent;
  let fixture: ComponentFixture<SiniestrosCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiniestrosCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestrosCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
