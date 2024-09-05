import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopEmissionParametersComponent } from './top-emission-parameters.component';

describe('TopEmissionParametersComponent', () => {
  let component: TopEmissionParametersComponent;
  let fixture: ComponentFixture<TopEmissionParametersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopEmissionParametersComponent]
    });
    fixture = TestBed.createComponent(TopEmissionParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
