import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EsparPage } from './espar.page';

describe('EsparPage', () => {
  let component: EsparPage;
  let fixture: ComponentFixture<EsparPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsparPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EsparPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
