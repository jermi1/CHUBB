import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciadorGridComponent } from './referenciador-grid.component';

describe('ReferenciadorGridComponent', () => {
  let component: ReferenciadorGridComponent;
  let fixture: ComponentFixture<ReferenciadorGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenciadorGridComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciadorGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
