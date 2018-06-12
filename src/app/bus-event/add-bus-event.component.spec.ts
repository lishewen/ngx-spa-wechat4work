import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusEventComponent } from './add-bus-event.component';

describe('AddBusEventComponent', () => {
  let component: AddBusEventComponent;
  let fixture: ComponentFixture<AddBusEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBusEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBusEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
