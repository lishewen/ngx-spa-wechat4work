import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusEventListComponent } from './bus-event-list.component';

describe('BusEventListComponent', () => {
  let component: BusEventListComponent;
  let fixture: ComponentFixture<BusEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
