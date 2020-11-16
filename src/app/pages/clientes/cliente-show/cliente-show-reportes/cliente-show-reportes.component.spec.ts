import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteShowReportesComponent } from './cliente-show-reportes.component';

describe('ClienteShowReportesComponent', () => {
  let component: ClienteShowReportesComponent;
  let fixture: ComponentFixture<ClienteShowReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteShowReportesComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteShowReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
