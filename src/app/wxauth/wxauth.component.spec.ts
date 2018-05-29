import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WxauthComponent } from './wxauth.component';

describe('WxauthComponent', () => {
  let component: WxauthComponent;
  let fixture: ComponentFixture<WxauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WxauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WxauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
