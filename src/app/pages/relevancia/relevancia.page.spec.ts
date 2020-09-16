import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelevanciaPage } from './relevancia.page';

describe('RelevanciaPage', () => {
  let component: RelevanciaPage;
  let fixture: ComponentFixture<RelevanciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelevanciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelevanciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
