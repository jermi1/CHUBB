import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobranzasCreateComponent } from './cobranzas-create.component';

describe('CobranzasCreateComponent', () => {
  let component: CobranzasCreateComponent;
  let fixture: ComponentFixture<CobranzasCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CobranzasCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobranzasCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
