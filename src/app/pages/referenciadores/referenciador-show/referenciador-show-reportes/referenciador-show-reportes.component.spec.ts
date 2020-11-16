import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciadorShowReportesComponent } from './referenciador-show-reportes.component';

describe('ReferenciadorShowReportesComponent', () => {
  let component: ReferenciadorShowReportesComponent;
  let fixture: ComponentFixture<ReferenciadorShowReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenciadorShowReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciadorShowReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
