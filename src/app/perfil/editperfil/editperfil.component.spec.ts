import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditperfilComponent } from './editperfil.component';

describe('EditperfilComponent', () => {
  let component: EditperfilComponent;
  let fixture: ComponentFixture<EditperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditperfilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
