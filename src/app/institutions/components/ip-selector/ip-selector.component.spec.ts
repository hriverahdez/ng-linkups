import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpSelectorComponent } from './ip-selector.component';

describe('IpSelectorComponent', () => {
  let component: IpSelectorComponent;
  let fixture: ComponentFixture<IpSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
