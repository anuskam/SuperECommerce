import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiConectionService } from '../../../../../core/services/api-conection/api-conection.service';
import { CatalogComponent } from './catalog.component';
import { IProduct } from '../../../../../core/models/view-models/iproduct';
import { By } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  template: '<div></div>'
})
class MockProductCardComponent {
  @Input() dataProduct!: IProduct;
}

@Component({
  selector: 'app-skeleton-product-card',
  template: '<div></div>'
})
class MockSkeletonProductCardComponent {}

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;
  let productsServiceSpy: jasmine.SpyObj<ApiConectionService<IProduct, any>>;

  beforeEach(async () => {
    const productsServiceMock = jasmine.createSpyObj('ApiConectionService', ['getList']);

    await TestBed.configureTestingModule({
      declarations: [
        CatalogComponent,
        MockProductCardComponent,
        MockSkeletonProductCardComponent
      ],
      providers: [
        { provide: ApiConectionService, useValue: productsServiceMock }
      ]
    }).compileComponents();

    productsServiceSpy = TestBed.inject(ApiConectionService) as jasmine.SpyObj<ApiConectionService<IProduct, any>>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with products loaded', fakeAsync(() => {
    const products: IProduct[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 100,
        description: 'Description 1',
        images: ['image1.jpg'],
        creationAt: '2023-01-01T00:00:00Z',
        updatedAt: '2023-01-01T00:00:00Z',
        category: {
          id: 1, name: 'Category 1', creationAt: '2023-01-01T00:00:00Z', updatedAt: '2023-01-01T00:00:00Z',
          image: ''
        }
      },
      {
        id: 2,
        title: 'Product 2',
        price: 200,
        description: 'Description 2',
        images: ['image2.jpg'],
        creationAt: '2023-01-01T00:00:00Z',
        updatedAt: '2023-01-01T00:00:00Z',
        category: {
          id: 2, name: 'Category 2', creationAt: '2023-01-01T00:00:00Z', updatedAt: '2023-01-01T00:00:00Z',
          image: ''
        }
      }
    ];
    productsServiceSpy.getList.and.returnValue(of(products));
    component.ngOnInit();
    tick();
    expect(component.arrProductsResponse).toEqual(products);
    expect(component.hasLoaded).toBeTrue();
  }));

  it('should show skeletons when loading products', () => {
    component.hasLoaded = false;
    fixture.detectChanges();
    const skeletonElements = fixture.debugElement.queryAll(By.css('app-skeleton-product-card'));
    expect(skeletonElements.length).toBeGreaterThan(0);
  });

  it('should show product cards when products are loaded', fakeAsync(() => {
    const products: IProduct[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 100,
        description: 'Description 1',
        images: ['image1.jpg'],
        creationAt: '2023-01-01T00:00:00Z',
        updatedAt: '2023-01-01T00:00:00Z',
        category: {
          id: 1, name: 'Category 1', creationAt: '2023-01-01T00:00:00Z', updatedAt: '2023-01-01T00:00:00Z',
          image: ''
        }
      },
      {
        id: 2,
        title: 'Product 2',
        price: 200,
        description: 'Description 2',
        images: ['image2.jpg'],
        creationAt: '2023-01-01T00:00:00Z',
        updatedAt: '2023-01-01T00:00:00Z',
        category: {
          id: 2, name: 'Category 2', creationAt: '2023-01-01T00:00:00Z', updatedAt: '2023-01-01T00:00:00Z',
          image: ''
        }
      }
    ];
    productsServiceSpy.getList.and.returnValue(of(products));
    component.getProducts();
    tick();
    fixture.detectChanges();
    const productElements = fixture.debugElement.queryAll(By.css('app-product-card'));
    expect(productElements.length).toBe(products.length);
  }));

  it('should load more products on scroll to bottom', fakeAsync(() => {
    const initialProducts: IProduct[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 100,
        description: 'Description 1',
        images: ['image1.jpg'],
        creationAt: '2023-01-01T00:00:00Z',
        updatedAt: '2023-01-01T00:00:00Z',
        category: {
          id: 1, name: 'Category 1', creationAt: '2023-01-01T00:00:00Z', updatedAt: '2023-01-01T00:00:00Z',
          image: ''
        }
      }
    ];
    const moreProducts: IProduct[] = [
      {
        id: 2,
        title: 'Product 2',
        price: 200,
        description: 'Description 2',
        images: ['image2.jpg'],
        creationAt: '2023-01-01T00:00:00Z',
        updatedAt: '2023-01-01T00:00:00Z',
        category: {
          id: 2, name: 'Category 2', creationAt: '2023-01-01T00:00:00Z', updatedAt: '2023-01-01T00:00:00Z',
          image: ''
        }
      }
    ];
    productsServiceSpy.getList.and.returnValues(of(initialProducts), of(moreProducts));
    
    component.ngOnInit();
    tick();
    expect(component.arrProductsResponse).toEqual(initialProducts);

    component.onWindowScroll();
    tick();
    fixture.detectChanges();
    expect(component.arrProductsResponse.length).toBe(2);
  }));
});
