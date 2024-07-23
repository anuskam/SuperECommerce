import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonProductCardComponent } from './skeleton-product-card.component';

describe('SkeletonProductCardComponent', () => {
  let component: SkeletonProductCardComponent;
  let fixture: ComponentFixture<SkeletonProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkeletonProductCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SkeletonProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
