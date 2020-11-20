import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestroShowCondicionMedicaComponent } from './siniestro-show-condicion-medica.component';

describe('SiniestroShowCondicionMedicaComponent', () => {
  let component: SiniestroShowCondicionMedicaComponent;
  let fixture: ComponentFixture<SiniestroShowCondicionMedicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiniestroShowCondicionMedicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestroShowCondicionMedicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
