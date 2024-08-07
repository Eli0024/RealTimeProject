import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexiniComponent } from './indexini.component';

describe('IndexiniComponent', () => {
  let component: IndexiniComponent;
  let fixture: ComponentFixture<IndexiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexiniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IndexiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
