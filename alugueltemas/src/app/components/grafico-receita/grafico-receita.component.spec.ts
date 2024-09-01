import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoReceitaComponent } from './grafico-receita.component';

describe('GraficoReceitaComponent', () => {
  let component: GraficoReceitaComponent;
  let fixture: ComponentFixture<GraficoReceitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficoReceitaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoReceitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
