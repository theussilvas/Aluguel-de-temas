import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaalugueisComponent } from './receitaalugueis.component';

describe('ReceitaalugueisComponent', () => {
  let component: ReceitaalugueisComponent;
  let fixture: ComponentFixture<ReceitaalugueisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceitaalugueisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceitaalugueisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
