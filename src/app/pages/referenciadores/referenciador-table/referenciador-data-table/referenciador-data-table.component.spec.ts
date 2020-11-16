import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciadorDataTableComponent } from './referenciador-data-table.component';

describe('ReferenciadorTableComponent', () => {
  let component: ReferenciadorDataTableComponent;
  let fixture: ComponentFixture<ReferenciadorDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenciadorDataTableComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciadorDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
