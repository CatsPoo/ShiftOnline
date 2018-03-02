import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBulletModalComponent } from './add-bullet-modal.component';

describe('AddBulletModalComponent', () => {
  let component: AddBulletModalComponent;
  let fixture: ComponentFixture<AddBulletModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBulletModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBulletModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
