import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelformComponent } from './aluguelform.component';

describe('AluguelformComponent', () => {
  let component: AluguelformComponent;
  let fixture: ComponentFixture<AluguelformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AluguelformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AluguelformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
