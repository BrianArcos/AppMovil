import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiscotecasPage } from './discotecas.page';

describe('DiscotecasPage', () => {
  let component: DiscotecasPage;
  let fixture: ComponentFixture<DiscotecasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscotecasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscotecasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
