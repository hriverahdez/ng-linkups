import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLegendComponent } from './category-legend.component';

describe('CategoryLegendComponent', () => {
  let component: CategoryLegendComponent;
  let fixture: ComponentFixture<CategoryLegendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryLegendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
