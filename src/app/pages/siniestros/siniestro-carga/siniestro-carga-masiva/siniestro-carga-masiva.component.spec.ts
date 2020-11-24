import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestroCargaMasivaComponent } from './siniestro-carga-masiva.component';

describe('SiniestroCargaMasivaComponent', () => {
  let component: SiniestroCargaMasivaComponent;
  let fixture: ComponentFixture<SiniestroCargaMasivaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiniestroCargaMasivaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestroCargaMasivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
