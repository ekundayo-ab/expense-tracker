import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, NavController} from 'ionic-angular/index';
import { By } from '@angular/platform-browser';
import { LandingPage } from './landing';
import { NavParams } from 'ionic-angular';
import { NavParamsMock, NavControllerMock } from '../../../test-config/ionic.mocks';

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
        { provide: NavParams, useClass: NavParamsMock},
        { provide: NavController, useClass: NavControllerMock}
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

  it('should call goToPage method', () => {
    let navCtrl = fixture.debugElement.injector.get(NavController)
    component.goToPage('LandingPage');
    expect(navCtrl.push).toHaveBeenCalled();
    expect(navCtrl.push).toHaveBeenCalledWith('LandingPage');
  });
});
