import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiCompComponent } from './li-comp.component';

describe('LiCompComponent', () => {
  let component: LiCompComponent;
  let fixture: ComponentFixture<LiCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
