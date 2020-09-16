import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleOperadorPage } from './detalle-operador.page';

describe('DetalleOperadorPage', () => {
  let component: DetalleOperadorPage;
  let fixture: ComponentFixture<DetalleOperadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleOperadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleOperadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
