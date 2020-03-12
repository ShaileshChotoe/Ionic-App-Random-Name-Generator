import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NamesPage } from './names.page';

describe('NamesPage', () => {
  let component: NamesPage;
  let fixture: ComponentFixture<NamesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NamesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
