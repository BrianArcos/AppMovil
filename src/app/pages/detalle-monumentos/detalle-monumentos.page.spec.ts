import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleMonumentosPage } from './detalle-monumentos.page';

describe('DetalleMonumentosPage', () => {
  let component: DetalleMonumentosPage;
  let fixture: ComponentFixture<DetalleMonumentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleMonumentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleMonumentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
