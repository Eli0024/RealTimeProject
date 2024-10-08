import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalponesgetComponent } from './galponesget.component';

describe('GalponesgetComponent', () => {
  let component: GalponesgetComponent;
  let fixture: ComponentFixture<GalponesgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalponesgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalponesgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
