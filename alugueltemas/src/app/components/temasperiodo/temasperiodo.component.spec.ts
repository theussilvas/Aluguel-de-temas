import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasperiodoComponent } from './temasperiodo.component';

describe('TemasperiodoComponent', () => {
  let component: TemasperiodoComponent;
  let fixture: ComponentFixture<TemasperiodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemasperiodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemasperiodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
