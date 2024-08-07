import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEncargadoComponent } from './form-encargado.component';

describe('FormEncargadoComponent', () => {
  let component: FormEncargadoComponent;
  let fixture: ComponentFixture<FormEncargadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormEncargadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
