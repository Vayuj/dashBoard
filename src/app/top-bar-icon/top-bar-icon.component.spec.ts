import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBarIconComponent } from './top-bar-icon.component';

describe('TopBarIconComponent', () => {
  let component: TopBarIconComponent;
  let fixture: ComponentFixture<TopBarIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBarIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBarIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
