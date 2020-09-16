import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleIglesiasPage } from './detalle-iglesias.page';

describe('DetalleIglesiasPage', () => {
  let component: DetalleIglesiasPage;
  let fixture: ComponentFixture<DetalleIglesiasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleIglesiasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleIglesiasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
