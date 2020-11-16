import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvidenciasViewComponent } from './evidencias-view.component';

describe('EvidenciasViewComponent', () => {
  let component: EvidenciasViewComponent;
  let fixture: ComponentFixture<EvidenciasViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvidenciasViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvidenciasViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
