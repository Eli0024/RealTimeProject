import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGranjaComponent } from './form-granja.component';

describe('FormGranjaComponent', () => {
  let component: FormGranjaComponent;
  let fixture: ComponentFixture<FormGranjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGranjaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormGranjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
