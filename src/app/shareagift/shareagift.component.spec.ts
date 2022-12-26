import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareagiftComponent } from './shareagift.component';

describe('ShareagiftComponent', () => {
  let component: ShareagiftComponent;
  let fixture: ComponentFixture<ShareagiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareagiftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareagiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
