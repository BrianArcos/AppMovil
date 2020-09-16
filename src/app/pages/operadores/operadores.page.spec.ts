import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OperadoresPage } from './operadores.page';

describe('OperadoresPage', () => {
  let component: OperadoresPage;
  let fixture: ComponentFixture<OperadoresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperadoresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OperadoresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
