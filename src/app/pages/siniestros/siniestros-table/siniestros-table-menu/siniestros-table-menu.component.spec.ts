import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiniestrosTableMenuComponent } from './siniestros-table-menu.component';

describe('SiniestrosTableMenuComponent', () => {
  let component: SiniestrosTableMenuComponent;
  let fixture: ComponentFixture<SiniestrosTableMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SiniestrosTableMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiniestrosTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
