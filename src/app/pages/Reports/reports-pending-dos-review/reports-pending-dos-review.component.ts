import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-reports-pending-dos-review',
  templateUrl: './reports-pending-dos-review.component.html',
  styleUrls: ['./reports-pending-dos-review.component.css']
})
export class ReportsPendingDosReviewComponent implements OnInit {
  // Raw Data
  excelData: any[] = [];
  pendingGDITAction: any[] = [];
  pendingDOHVerification: any[] = [];
  completedAwaitingDC: any[] = [];
  completedAutomatedReports: any[] = [];
  completed: any[] = [];

  // Condensed Data
  condensedData: any[] = [];
  condensedPendingGDITAction: any[] = [];
  condensedPendingDOHVerification: any[] = [];
  condensedCompletedAwaitingDC: any[] = [];
  condensedCompletedAutomatedReports: any[] = [];
  condensedCompleted: any[] = [];

  public chart: any;

  ngOnInit(): void {
    this.pendingGDITAction = this.sharedService.getData('Reports Pending GDIT Action');
    this.pendingDOHVerification = this.sharedService.getData('Reports Pending DOH Verification');
    this.completedAwaitingDC = this.sharedService.getData('Reports Completed - Awaiting DC');
    this.completedAutomatedReports = this.sharedService.getData('Reports Completed - Automated Report');
    this.completed = this.sharedService.getData('Reports Completed');
    this.excelData = this.pendingGDITAction.concat(this.pendingDOHVerification, this.completedAwaitingDC, this.completedAutomatedReports, this.completed);
    this.condenseData();
    this.getCondensedCategories();
    this.createChart();
    this.getSeverity();
    this.severityChart();
    // this.getTotalDaysAverage();
  }

  displayData: any[] = [];

  getCondensedCategories() {
    for (let i = 0; i < this.condensedData.length; i++) {
      let col = 13;
      if (this.condensedData[i][col] == "Pending GDIT Action") {
        this.condensedPendingGDITAction.push(this.condensedData[i]);
      }
      else if (this.condensedData[i][col] == "Pending DOH Verification") {
        this.condensedPendingDOHVerification.push(this.condensedData[i]);
      }
      else if (this.condensedData[i][col] == "Completed - Awaiting DC") {
        this.condensedCompletedAwaitingDC.push(this.condensedData[i]);
      }
      else if (this.condensedData[i][col] == "Completed - Automated Report") {
        this.condensedCompletedAutomatedReports.push(this.condensedData[i]);
      }
      else if (this.condensedData[i][col] == "Completed") {
        this.condensedCompleted.push(this.condensedData[i]);
      }
    }

    let final = JSON.parse(JSON.stringify(this.condensedPendingDOHVerification));
    let excludeCol = [2, 9, 10, 12, 13, 16, 17, 18];
    excludeCol.sort((a, b) => b - a);

    final = final.map((row: any[]) => {
      excludeCol.forEach(colIndex => {
        row.splice(colIndex, 1);
      });

      return row;
    });

    this.displayData = JSON.parse(JSON.stringify(final));
  }

  condenseData() {
    let map = new Map();
    let colSum = 9;
    this.excelData.forEach(row => {
      let key = row[0];

      if (!map.has(key)) {
        map.set(key, row.slice());
      }
      else {
        let existingRow = map.get(key);
        existingRow[colSum] = Number(existingRow[colSum]);
        existingRow[colSum] += Number(row[colSum]);
      }
    });

    let final = Array.from(map.values());
    this.condensedData = final;
  }

  constructor(private sharedService: SharedService) {
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['Pending GDIT Action', 'Pending DOH Verification', 'Completed (Awaiting DC)', 'Completed (Automated Report)', 'Completed (CLosed)'],
        datasets: [{
          label: 'Category',
          data: [this.condensedPendingGDITAction.length, this.condensedPendingDOHVerification.length, this.condensedCompletedAwaitingDC.length, this.condensedCompletedAutomatedReports.length, this.condensedCompleted.length],
          backgroundColor: [
            'red',
            'pink',
            'green',
            'yellow',
            'orange',
            'blue',
          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5,
        animation: {
          duration: 0
        }
      }
    });
  }

  serverityHigh: number = 0;
  serverityMedium: number = 0;
  serverityLow: number = 0;

  // totalDaysAverage: number = 0;

  // getTotalDaysAverage() {
  //   let col = 9;
  //   this.condensedAnalysisComplete.forEach(row => {
  //     this.totalDaysAverage += row[col];
  //   });

  //   this.totalDaysAverage = this.totalDaysAverage / this.condensedAnalysisComplete.length;
  // }

  getSeverity() {
    for (let i = 0; i < this.condensedPendingDOHVerification.length; i++) {
      let col = 3;
      if (this.condensedPendingDOHVerification[i][col] == "High") {
        this.serverityHigh = this.serverityHigh + 1;
      }
      else if (this.condensedPendingDOHVerification[i][col] == "Medium") {
        this.serverityMedium = this.serverityMedium + 1;
      }
      else if (this.condensedPendingDOHVerification[i][col] == "Low") {
        this.serverityLow = this.serverityLow + 1;
      }
    }
  }

  severityChart() {
    this.chart = new Chart("severityChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Low', 'Medium', 'High'],
        datasets: [{
          label: 'Severity',
          data: [this.serverityLow,
          this.serverityMedium,
          this.serverityHigh],
          backgroundColor: [
            'lightgreen',
            'orange',
            'red',
          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
}
