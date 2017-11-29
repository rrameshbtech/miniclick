import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniHeaderRowComponent } from './mini-header-row.component';

describe('MiniHeaderRowComponent', () => {
  let component: MiniHeaderRowComponent;
  let fixture: ComponentFixture<MiniHeaderRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniHeaderRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniHeaderRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
