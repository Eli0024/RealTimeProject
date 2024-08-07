import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGalponComponent } from './form-galpon.component';

describe('FormGalponComponent', () => {
  let component: FormGalponComponent;
  let fixture: ComponentFixture<FormGalponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGalponComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormGalponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
