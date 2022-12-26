import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewgiftComponent } from './newgift.component';

describe('NewgiftComponent', () => {
  let component: NewgiftComponent;
  let fixture: ComponentFixture<NewgiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewgiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewgiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
