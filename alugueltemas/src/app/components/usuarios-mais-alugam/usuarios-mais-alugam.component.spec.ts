import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariosMaisAlugamComponent } from './usuarios-mais-alugam.component';

describe('UsuariosMaisAlugamComponent', () => {
  let component: UsuariosMaisAlugamComponent;
  let fixture: ComponentFixture<UsuariosMaisAlugamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuariosMaisAlugamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuariosMaisAlugamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
