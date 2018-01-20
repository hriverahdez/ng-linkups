import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutionItemComponent } from './institution-item.component';

describe('InstitutionItemComponent', () => {
  let component: InstitutionItemComponent;
  let fixture: ComponentFixture<InstitutionItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutionItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitutionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
