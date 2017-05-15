import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StCellComponent } from './st-cell.component';

describe('StCellComponent', () => {
  let component: StCellComponent;
  let fixture: ComponentFixture<StCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
