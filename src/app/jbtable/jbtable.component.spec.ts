
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbtableComponent } from './jbtable.component';

describe('JbtableComponent', () => {
  let component: JbtableComponent;
  let fixture: ComponentFixture<JbtableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JbtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JbtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
