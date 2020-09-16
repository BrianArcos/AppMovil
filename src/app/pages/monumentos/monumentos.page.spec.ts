import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MonumentosPage } from './monumentos.page';

describe('MonumentosPage', () => {
  let component: MonumentosPage;
  let fixture: ComponentFixture<MonumentosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonumentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MonumentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
