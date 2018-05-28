
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { JbNavComponent } from './jb-nav.component';

describe('JbNavComponent', () => {
  let component: JbNavComponent;
  let fixture: ComponentFixture<JbNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JbNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JbNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
