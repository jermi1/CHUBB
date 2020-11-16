import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionShowComponent } from './cotizacion-show.component';

describe('CotizacionShowComponent', () => {
  let component: CotizacionShowComponent;
  let fixture: ComponentFixture<CotizacionShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CotizacionShowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
