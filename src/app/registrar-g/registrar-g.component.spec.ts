import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarGComponent } from './registrar-g.component';

describe('RegistrarGComponent', () => {
  let component: RegistrarGComponent;
  let fixture: ComponentFixture<RegistrarGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarGComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
