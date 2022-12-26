import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotofloveComponent } from './lotoflove.component';

describe('LotofloveComponent', () => {
  let component: LotofloveComponent;
  let fixture: ComponentFixture<LotofloveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotofloveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LotofloveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
