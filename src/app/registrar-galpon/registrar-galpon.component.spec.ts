import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarGalponComponent } from './registrar-galpon.component';

describe('RegistrarGalponComponent', () => {
  let component: RegistrarGalponComponent;
  let fixture: ComponentFixture<RegistrarGalponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarGalponComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarGalponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
