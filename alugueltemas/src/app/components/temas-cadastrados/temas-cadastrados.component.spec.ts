import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasCadastradosComponent } from './temas-cadastrados.component';

describe('TemasCadastradosComponent', () => {
  let component: TemasCadastradosComponent;
  let fixture: ComponentFixture<TemasCadastradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemasCadastradosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemasCadastradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
