import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBulletModalComponent } from './update-bullet-modal.component';

describe('UpdateBulletModalComponent', () => {
  let component: UpdateBulletModalComponent;
  let fixture: ComponentFixture<UpdateBulletModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBulletModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBulletModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
