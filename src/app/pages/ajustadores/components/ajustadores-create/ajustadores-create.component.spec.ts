import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjustadoresCreateComponent } from './ajustadores-create.component';

describe('AjustadoresCreateComponent', () => {
  let component: AjustadoresCreateComponent;
  let fixture: ComponentFixture<AjustadoresCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AjustadoresCreateComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjustadoresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
