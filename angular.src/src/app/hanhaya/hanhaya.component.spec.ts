import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HanhayaComponent } from './hanhaya.component';

describe('HanhayaComponent', () => {
  let component: HanhayaComponent;
  let fixture: ComponentFixture<HanhayaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HanhayaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HanhayaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
