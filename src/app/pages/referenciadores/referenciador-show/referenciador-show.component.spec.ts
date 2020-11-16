import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciadorShowComponent } from './referenciador-show.component';

describe('ReferenciadorShowComponent', () => {
  let component: ReferenciadorShowComponent;
  let fixture: ComponentFixture<ReferenciadorShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenciadorShowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciadorShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
