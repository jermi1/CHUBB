import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionShowListComponent } from './cotizacion-show-list.component';

describe('CotizacionShowListComponent', () => {
  let component: CotizacionShowListComponent;
  let fixture: ComponentFixture<CotizacionShowListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizacionShowListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionShowListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
