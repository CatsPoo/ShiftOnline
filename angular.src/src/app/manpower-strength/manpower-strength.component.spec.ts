import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManpowerStrengthComponent } from './manpower-strength.component';

describe('ManpowerStrengthComponent', () => {
  let component: ManpowerStrengthComponent;
  let fixture: ComponentFixture<ManpowerStrengthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManpowerStrengthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManpowerStrengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
