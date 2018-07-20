import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';
import { LandingPage } from './landing';
import { NavParams } from 'ionic-angular';
import { NavParamsMock } from '../../../test-config/mocks-ionic';

describe('Landing Page', () => {
  let h2: HTMLElement;
  let component: LandingPage;
  let fixture: ComponentFixture<LandingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPage],
      imports: [
        IonicModule.forRoot(LandingPage)
      ],
      providers: [
        NavController,
        { provide: NavParams, useClass: NavParamsMock}
      ]
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPage);
    component = fixture.componentInstance;
    h2 = fixture.nativeElement.querySelector('h2')
  });

  it('should create LandingPage component', () => expect(component).toBeDefined());

  it('should render Expense Tracker as an h2 heading', () => {
    expect(h2.textContent).toContain('Expense Tracker')
  });
});
