import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopEmissionInfoComponent } from './top-emission-info.component';

describe('TopEmissionInfoComponent', () => {
  let component: TopEmissionInfoComponent;
  let fixture: ComponentFixture<TopEmissionInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopEmissionInfoComponent]
    });
    fixture = TestBed.createComponent(TopEmissionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
