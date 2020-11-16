import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciadorShowSiniestrosComponent } from './referenciador-show-siniestros.component';

describe('ReferenciadorShowSiniestrosComponent', () => {
  let component: ReferenciadorShowSiniestrosComponent;
  let fixture: ComponentFixture<ReferenciadorShowSiniestrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenciadorShowSiniestrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciadorShowSiniestrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
