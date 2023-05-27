import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducthahaComponent } from './producthaha.component';

describe('ProducthahaComponent', () => {
  let component: ProducthahaComponent;
  let fixture: ComponentFixture<ProducthahaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducthahaComponent]
    });
    fixture = TestBed.createComponent(ProducthahaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
