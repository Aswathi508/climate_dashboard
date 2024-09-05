import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorsTableComponent } from './factors-table.component';

describe('FactorsTableComponent', () => {
  let component: FactorsTableComponent;
  let fixture: ComponentFixture<FactorsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FactorsTableComponent]
    });
    fixture = TestBed.createComponent(FactorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
