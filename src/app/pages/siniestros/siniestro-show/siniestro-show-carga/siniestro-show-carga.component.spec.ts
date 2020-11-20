import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestroShowCargaComponent } from './siniestro-show-carga.component';

describe('SiniestroShowCargaComponent', () => {
  let component: SiniestroShowCargaComponent;
  let fixture: ComponentFixture<SiniestroShowCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiniestroShowCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestroShowCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
