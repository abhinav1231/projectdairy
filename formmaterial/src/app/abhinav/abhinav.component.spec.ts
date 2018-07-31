import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbhinavComponent } from './abhinav.component';

describe('AbhinavComponent', () => {
  let component: AbhinavComponent;
  let fixture: ComponentFixture<AbhinavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbhinavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbhinavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
