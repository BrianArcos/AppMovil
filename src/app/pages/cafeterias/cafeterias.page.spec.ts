import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CafeteriasPage } from './cafeterias.page';

describe('CafeteriasPage', () => {
  let component: CafeteriasPage;
  let fixture: ComponentFixture<CafeteriasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafeteriasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CafeteriasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
