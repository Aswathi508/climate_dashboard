import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalInfoComponent } from './global-info.component';

describe('GlobalInfoComponent', () => {
  let component: GlobalInfoComponent;
  let fixture: ComponentFixture<GlobalInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GlobalInfoComponent]
    });
    fixture = TestBed.createComponent(GlobalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
