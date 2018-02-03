import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnetRangeFormComponent } from './subnet-range-form.component';

describe('SubnetRangeFormComponent', () => {
  let component: SubnetRangeFormComponent;
  let fixture: ComponentFixture<SubnetRangeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubnetRangeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnetRangeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
