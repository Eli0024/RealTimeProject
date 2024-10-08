import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablecerComponent } from './establecer.component';

describe('EstablecerComponent', () => {
  let component: EstablecerComponent;
  let fixture: ComponentFixture<EstablecerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstablecerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstablecerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
