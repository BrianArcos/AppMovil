import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IglesiasPage } from './iglesias.page';

describe('IglesiasPage', () => {
  let component: IglesiasPage;
  let fixture: ComponentFixture<IglesiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IglesiasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IglesiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
