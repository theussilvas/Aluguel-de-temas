import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QtdclientesComponent } from './qtdclientes.component';

describe('QtdclientesComponent', () => {
  let component: QtdclientesComponent;
  let fixture: ComponentFixture<QtdclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QtdclientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QtdclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
