import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnetFormComponent } from './subnet-form.component';

describe('SubnetFormComponent', () => {
  let component: SubnetFormComponent;
  let fixture: ComponentFixture<SubnetFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubnetFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
