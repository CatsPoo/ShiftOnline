import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHanhayaModalComponent } from './update-hanhaya-modal.component';

describe('UpdateHanhayaModalComponent', () => {
  let component: UpdateHanhayaModalComponent;
  let fixture: ComponentFixture<UpdateHanhayaModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHanhayaModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHanhayaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
