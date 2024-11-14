import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { SharedService } from 'src/app/shared.service';
import { SharedPSRService } from 'src/app/sharedPSR.service';

@Component({
  selector: 'app-psr-pending-gdit-action',
  templateUrl: './psr-pending-gdit-action.component.html',
  styleUrls: ['./psr-pending-gdit-action.component.css']
})
export class PSRPendingGditActionComponent implements OnInit {
  // Raw Data
  excelData: any[] = [];
  pendingGDITAction: any[] = [];
  pendingRequestorVerification: any[] = [];
  closed: any[] = [];
  closedPendingRequestorVerification: any[] = [];
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
    this.pendingGDITAction = this.sharedService.getData('PSR Pending GDIT Action');
    this.pendingRequestorVerification = this.sharedService.getData('PSR Pending Requestor Verification');
    this.closed = this.sharedService.getData('PSR Closed');
    this.closedPendingRequestorVerification = this.sharedService.getData('PSR Closed Pending Requestor Verification');
    this.excelData = this.pendingGDITAction.concat(this.pendingRequestorVerification, this.closed, this.closedPendingRequestorVerification);
    // this.condenseData();
    // this.getCondensedCategories();
    this.createChart();
    this.getSeverity();
    this.severityChart();
    this.createDisplayVariable();

    // this.getTotalDaysAverage();
  }

  createDisplayVariable() {
    let final = JSON.parse(JSON.stringify(this.pendingGDITAction));
    let excludeCol = [1, 3, 9, 10, 15, 16];
    excludeCol.sort((a, b) => b - a);

    final = final.map((row: any[]) => {
      excludeCol.forEach(colIndex => {
        row.splice(colIndex, 1);
      });

      return row;
    });

    this.displayData = JSON.parse(JSON.stringify(final));
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
        labels: ['Pending GDIT Action', 'Pending Requester Verification', 'Closed', 'Closed Pending Requester Verification'],
        datasets: [{
          label: 'Category',
          data: [this.pendingGDITAction.length, this.pendingRequestorVerification.length, this.closed.length, this.closedPendingRequestorVerification.length],
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
    for (let i = 0; i < this.pendingGDITAction.length; i++) {
      let col = 4;
      if (this.pendingGDITAction[i][col] == "High") {
        this.serverityHigh = this.serverityHigh + 1;
      }
      else if (this.pendingGDITAction[i][col] == "Medium") {
        this.serverityMedium = this.serverityMedium + 1;
      }
      else if (this.pendingGDITAction[i][col] == "Low") {
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
