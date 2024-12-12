import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserzanaetcijaComponent } from './userzanaetcija.component';

describe('UserzanaetcijaComponent', () => {
  let component: UserzanaetcijaComponent;
  let fixture: ComponentFixture<UserzanaetcijaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserzanaetcijaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserzanaetcijaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
