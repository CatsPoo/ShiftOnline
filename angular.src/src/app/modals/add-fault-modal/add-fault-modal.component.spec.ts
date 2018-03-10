import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFaultModalComponent } from './add-fault-modal.component';

describe('AddFaultModalComponent', () => {
  let component: AddFaultModalComponent;
  let fixture: ComponentFixture<AddFaultModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFaultModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFaultModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
