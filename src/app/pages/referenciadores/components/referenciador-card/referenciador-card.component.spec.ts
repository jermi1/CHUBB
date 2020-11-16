import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciadorCardComponent } from './referenciador-card.component';

describe('ReferenciadorCardComponent', () => {
  let component: ReferenciadorCardComponent;
  let fixture: ComponentFixture<ReferenciadorCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenciadorCardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenciadorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
