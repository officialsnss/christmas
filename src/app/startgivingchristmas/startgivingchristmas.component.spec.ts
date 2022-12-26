import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartgivingchristmasComponent } from './startgivingchristmas.component';

describe('StartgivingchristmasComponent', () => {
  let component: StartgivingchristmasComponent;
  let fixture: ComponentFixture<StartgivingchristmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartgivingchristmasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartgivingchristmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
