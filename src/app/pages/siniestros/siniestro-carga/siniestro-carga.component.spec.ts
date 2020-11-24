import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestroCargaComponent } from './siniestro-carga.component';

describe('SiniestroCargaComponent', () => {
  let component: SiniestroCargaComponent;
  let fixture: ComponentFixture<SiniestroCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiniestroCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestroCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
