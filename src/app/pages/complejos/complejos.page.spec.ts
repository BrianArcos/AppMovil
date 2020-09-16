import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComplejosPage } from './complejos.page';

describe('ComplejosPage', () => {
  let component: ComplejosPage;
  let fixture: ComponentFixture<ComplejosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplejosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComplejosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
