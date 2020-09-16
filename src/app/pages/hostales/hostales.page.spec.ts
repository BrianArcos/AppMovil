import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HostalesPage } from './hostales.page';

describe('HostalesPage', () => {
  let component: HostalesPage;
  let fixture: ComponentFixture<HostalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HostalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
