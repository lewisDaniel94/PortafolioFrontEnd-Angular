import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogosHeaderComponent } from './logos-header.component';

describe('LogosHeaderComponent', () => {
  let component: LogosHeaderComponent;
  let fixture: ComponentFixture<LogosHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogosHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
