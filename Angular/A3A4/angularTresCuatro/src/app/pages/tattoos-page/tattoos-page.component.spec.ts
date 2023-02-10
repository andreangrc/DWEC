import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattoosPage } from './tattoos-page.component';

describe('TattoosPage', () => {
  let component: TattoosPage;
  let fixture: ComponentFixture<TattoosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TattoosPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TattoosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
