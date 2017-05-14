import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StTableComponent } from './st-table.component';

describe('StTableComponent', () => {
  let component: StTableComponent;
  let fixture: ComponentFixture<StTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
