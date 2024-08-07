import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpordaComponent } from './exporda.component';

describe('ExpordaComponent', () => {
  let component: ExpordaComponent;
  let fixture: ComponentFixture<ExpordaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpordaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpordaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
