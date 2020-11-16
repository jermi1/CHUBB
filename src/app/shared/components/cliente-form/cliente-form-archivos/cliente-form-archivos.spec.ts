import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteFormArchivosComponent } from './cliente-form-archivos.component';

describe('ClienteFormArchivosComponent', () => {
  let component: ClienteFormArchivosComponent;
  let fixture: ComponentFixture<ClienteFormArchivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteFormArchivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteFormArchivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
