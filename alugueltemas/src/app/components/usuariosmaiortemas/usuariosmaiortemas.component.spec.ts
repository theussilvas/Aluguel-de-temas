import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosmaiortemasComponent } from './usuariosmaiortemas.component';

describe('UsuariosmaiortemasComponent', () => {
  let component: UsuariosmaiortemasComponent;
  let fixture: ComponentFixture<UsuariosmaiortemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosmaiortemasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosmaiortemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
