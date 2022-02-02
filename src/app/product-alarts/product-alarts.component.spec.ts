import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlartsComponent } from './product-alarts.component';

describe('ProductAlartsComponent', () => {
  let component: ProductAlartsComponent;
  let fixture: ComponentFixture<ProductAlartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAlartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAlartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
