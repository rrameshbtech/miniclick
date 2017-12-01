import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MiniGridModule } from '../shared/mini-grid/mini-grid.module';
import { MonthlyReportService } from './monthly-report.service';
import { MonthlyReportComponent } from './monthly-report.component';

describe('MonthlyReportComponent', () => {
  let component: MonthlyReportComponent;
  let fixture: ComponentFixture<MonthlyReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MiniGridModule,
      HttpClientModule],
      providers: [MonthlyReportService],
      declarations: [ MonthlyReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
