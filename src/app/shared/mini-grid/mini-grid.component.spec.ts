import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniGridComponent } from './mini-grid.component';

describe('MiniGridComponent', () => {
  let component: MiniGridComponent;
  let fixture: ComponentFixture<MiniGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
