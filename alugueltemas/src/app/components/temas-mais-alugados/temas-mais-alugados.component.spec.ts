import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasMaisAlugadosComponent } from './temas-mais-alugados.component';

describe('TemasMaisAlugadosComponent', () => {
  let component: TemasMaisAlugadosComponent;
  let fixture: ComponentFixture<TemasMaisAlugadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemasMaisAlugadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemasMaisAlugadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
