import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchandisingPage } from './merchandising-page.component';

describe('MerchandisingPageComponent', () => {
  let component: MerchandisingPage;
  let fixture: ComponentFixture<MerchandisingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchandisingPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchandisingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
