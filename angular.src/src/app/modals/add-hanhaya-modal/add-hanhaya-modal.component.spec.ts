import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHanhayaModalComponent } from './add-hanhaya-modal.component';

describe('AddHanhayaModalComponent', () => {
  let component: AddHanhayaModalComponent;
  let fixture: ComponentFixture<AddHanhayaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHanhayaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHanhayaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
