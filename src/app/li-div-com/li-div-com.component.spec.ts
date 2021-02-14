import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiDivComComponent } from './li-div-com.component';

describe('LiDivComComponent', () => {
  let component: LiDivComComponent;
  let fixture: ComponentFixture<LiDivComComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiDivComComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiDivComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
