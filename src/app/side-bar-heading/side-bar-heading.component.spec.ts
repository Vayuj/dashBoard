import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarHeadingComponent } from './side-bar-heading.component';

describe('SideBarHeadingComponent', () => {
  let component: SideBarHeadingComponent;
  let fixture: ComponentFixture<SideBarHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarHeadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
