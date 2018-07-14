import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentInfoComponent } from './development-info.component';

describe('DevelopmentInfoComponent', () => {
  let component: DevelopmentInfoComponent;
  let fixture: ComponentFixture<DevelopmentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
