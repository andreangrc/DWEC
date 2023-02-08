import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattoosPageComponent } from './tattoos-page.component';

describe('TattoosPageComponent', () => {
  let component: TattoosPageComponent;
  let fixture: ComponentFixture<TattoosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TattoosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TattoosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
