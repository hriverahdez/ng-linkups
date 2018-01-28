import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubnetsDialogComponent } from './subnets-dialog.component';

describe('SubnetsDialogComponent', () => {
  let component: SubnetsDialogComponent;
  let fixture: ComponentFixture<SubnetsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubnetsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubnetsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
