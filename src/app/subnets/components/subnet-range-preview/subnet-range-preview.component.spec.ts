import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnetRangePreviewComponent } from './subnet-range-preview.component';

describe('SubnetRangePreviewComponent', () => {
  let component: SubnetRangePreviewComponent;
  let fixture: ComponentFixture<SubnetRangePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubnetRangePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnetRangePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
