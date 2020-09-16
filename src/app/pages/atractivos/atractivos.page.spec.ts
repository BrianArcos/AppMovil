import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtractivosPage } from './atractivos.page';

describe('AtractivosPage', () => {
  let component: AtractivosPage;
  let fixture: ComponentFixture<AtractivosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtractivosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtractivosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
