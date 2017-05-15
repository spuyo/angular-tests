import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StRowComponent } from './st-row.component';

describe('StRowComponent', () => {
  let component: StRowComponent;
  let fixture: ComponentFixture<StRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
