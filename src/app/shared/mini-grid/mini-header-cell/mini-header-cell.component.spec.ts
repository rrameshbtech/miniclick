import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniHeaderCellComponent } from './mini-header-cell.component';

describe('MiniHeaderCellComponent', () => {
  let component: MiniHeaderCellComponent;
  let fixture: ComponentFixture<MiniHeaderCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniHeaderCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniHeaderCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
