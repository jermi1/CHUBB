import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciadorEditComponent } from './referenciador-edit.component';

describe('ReferenciadorEditComponent', () => {
  let component: ReferenciadorEditComponent;
  let fixture: ComponentFixture<ReferenciadorEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenciadorEditComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciadorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
