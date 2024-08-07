import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopiaSComponent } from './copia-s.component';

describe('CopiaSComponent', () => {
  let component: CopiaSComponent;
  let fixture: ComponentFixture<CopiaSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopiaSComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CopiaSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
