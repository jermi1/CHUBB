import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestroShowDetallesComponent } from './siniestro-show-detalles.component';

describe('SiniestroShowDetallesComponent', () => {
  let component: SiniestroShowDetallesComponent;
  let fixture: ComponentFixture<SiniestroShowDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiniestroShowDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestroShowDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
