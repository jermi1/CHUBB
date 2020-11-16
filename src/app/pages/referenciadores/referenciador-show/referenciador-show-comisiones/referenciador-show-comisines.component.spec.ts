import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciadorShowComisinesComponent } from './referenciador-show-comisines.component';

describe('ReferenciadorShowComisinesComponent', () => {
  let component: ReferenciadorShowComisinesComponent;
  let fixture: ComponentFixture<ReferenciadorShowComisinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenciadorShowComisinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciadorShowComisinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
