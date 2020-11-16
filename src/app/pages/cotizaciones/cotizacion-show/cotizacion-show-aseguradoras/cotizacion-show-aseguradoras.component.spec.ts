import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionShowAseguradorasComponent } from './cotizacion-show-aseguradoras.component';

describe('CotizacionShowAseguradorasComponent', () => {
  let component: CotizacionShowAseguradorasComponent;
  let fixture: ComponentFixture<CotizacionShowAseguradorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionShowAseguradorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionShowAseguradorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
