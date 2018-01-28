import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnetItemComponent } from './subnet-item.component';

describe('SubnetItemComponent', () => {
  let component: SubnetItemComponent;
  let fixture: ComponentFixture<SubnetItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubnetItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnetItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
