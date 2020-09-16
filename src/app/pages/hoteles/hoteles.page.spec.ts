import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelesPage } from './hoteles.page';

describe('HotelesPage', () => {
  let component: HotelesPage;
  let fixture: ComponentFixture<HotelesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotelesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
