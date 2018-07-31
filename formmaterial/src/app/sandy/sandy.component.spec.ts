import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SandyComponent } from './sandy.component';

describe('SandyComponent', () => {
  let component: SandyComponent;
  let fixture: ComponentFixture<SandyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SandyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SandyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
