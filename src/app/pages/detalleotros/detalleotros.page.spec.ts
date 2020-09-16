import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleotrosPage } from './detalleotros.page';

describe('DetalleotrosPage', () => {
  let component: DetalleotrosPage;
  let fixture: ComponentFixture<DetalleotrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleotrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleotrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
