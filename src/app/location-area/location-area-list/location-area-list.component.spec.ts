import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAreaListComponent } from './location-area-list.component';

describe('LocationAreaListComponent', () => {
  let component: LocationAreaListComponent;
  let fixture: ComponentFixture<LocationAreaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationAreaListComponent]
    });
    fixture = TestBed.createComponent(LocationAreaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
