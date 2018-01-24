import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnetDetailComponent } from './subnet-detail.component';

describe('SubnetDetailComponent', () => {
  let component: SubnetDetailComponent;
  let fixture: ComponentFixture<SubnetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubnetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
