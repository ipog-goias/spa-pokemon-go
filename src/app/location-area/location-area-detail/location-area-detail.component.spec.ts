import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAreaDetailComponent } from './location-area-detail.component';

describe('LocationAreaDetailComponent', () => {
  let component: LocationAreaDetailComponent;
  let fixture: ComponentFixture<LocationAreaDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationAreaDetailComponent]
    });
    fixture = TestBed.createComponent(LocationAreaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
