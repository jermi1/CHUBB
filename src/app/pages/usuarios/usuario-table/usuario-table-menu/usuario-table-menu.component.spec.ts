import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioTableMenuComponent } from './usuario-table-menu.component';

describe('UsuarioTableMenuComponent', () => {
  let component: UsuarioTableMenuComponent;
  let fixture: ComponentFixture<UsuarioTableMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioTableMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioTableMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
