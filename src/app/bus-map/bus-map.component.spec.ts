import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusMapComponent } from './bus-map.component';

describe('BusMapComponent', () => {
  let component: BusMapComponent;
  let fixture: ComponentFixture<BusMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
