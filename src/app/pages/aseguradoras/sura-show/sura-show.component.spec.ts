import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuraShowComponent } from './sura-show.component';

describe('SuraShowComponent', () => {
  let component: SuraShowComponent;
  let fixture: ComponentFixture<SuraShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuraShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuraShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
