import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HanhayotComponent } from './hanhayot.component';

describe('HanhayotComponent', () => {
  let component: HanhayotComponent;
  let fixture: ComponentFixture<HanhayotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanhayotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HanhayotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
