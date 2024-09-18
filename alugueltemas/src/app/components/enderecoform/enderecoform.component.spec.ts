import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoformComponent } from './enderecoform.component';

describe('EnderecoformComponent', () => {
  let component: EnderecoformComponent;
  let fixture: ComponentFixture<EnderecoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnderecoformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnderecoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
