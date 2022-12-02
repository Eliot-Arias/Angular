import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajephpComponent } from './lenguajephp.component';

describe('LenguajephpComponent', () => {
  let component: LenguajephpComponent;
  let fixture: ComponentFixture<LenguajephpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LenguajephpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LenguajephpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
