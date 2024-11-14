import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-rfas-completed',
  templateUrl: './rfas-completed.component.html',
  styleUrls: ['./rfas-completed.component.css']
})
export class RfasCompletedComponent implements OnInit {
  // Raw Data
  excelData: any[] = [];
  open: any[] = [];
  assigned: any[] = [];
  pendingDOHVerification: any[] = [];
  analysisComplete: any[] = [];

  // Condensed Data
  condensedData: any[] = [];
  condensedOpen: any[] = [];
  condensedAssigned: any[] = [];
  condensedPendingDOHVerification: any[] = [];
  condensedAnalysisComplete: any[] = [];

  public chart: any;

  ngOnInit(): void {
    this.pendingDOHVerification = this.sharedService.getData('RFA Active Pending DOH Verification');
    this.open = this.sharedService.getData('RFA Active Open');
    this.assigned = this.sharedService.getData('RFA Active Assigned');
    this.analysisComplete = this.sharedService.getData('RFA Active Analysis Complete');
    this.excelData = this.pendingDOHVerification.concat(this.assigned, this.analysisComplete, this.open);
    this.condenseData();
    this.getCondensedCategories();
    this.createChart();
    this.getSeverity();
    this.severityChart();
    this.getTotalDaysAverage();
  }

  displayData: any[] = [];

  getCondensedCategories() {
    for (let i = 0; i < this.condensedData.length; i++) {
      let col = 10;
      if (this.condensedData[i][col] == "Pending DOH Verification") {
        this.condensedPendingDOHVerification.push(this.condensedData[i]);
      }
      else if (this.condensedData[i][col] == "Open") {
        this.condensedOpen.push(this.condensedData[i]);
      }
      else if (this.condensedData[i][col] == "Assigned") {
        this.condensedAssigned.push(this.condensedData[i]);
      }
      else if (this.condensedData[i][col] == "Analysis Complete") {
        this.condensedAnalysisComplete.push(this.condensedData[i]);
      }
    }

    let final = JSON.parse(JSON.stringify(this.condensedAnalysisComplete));
    let excludeCol = [2, 7, 8, 10, 11, 15, 16];
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
        labels: ['Pending DOH Verification', 'Open', 'Assigned', 'Analysis Complete'],
        datasets: [{
          label: 'Category',
          data: [this.condensedPendingDOHVerification.length, this.condensedOpen.length, this.condensedAssigned.length, this.condensedAnalysisComplete.length],
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

  totalDaysAverage: number = 0;

  getTotalDaysAverage() {
    let col = 9;
    this.condensedAnalysisComplete.forEach(row => {
      this.totalDaysAverage += row[col];
    });

    this.totalDaysAverage = this.totalDaysAverage / this.condensedAnalysisComplete.length;
  }

  getSeverity() {
    for (let i = 0; i < this.condensedAnalysisComplete.length; i++) {
      let col = 3;
      if (this.condensedAnalysisComplete[i][col] == "High") {
        this.serverityHigh = this.serverityHigh + 1;
      }
      else if (this.condensedAnalysisComplete[i][col] == "Medium") {
        this.serverityMedium = this.serverityMedium + 1;
      }
      else if (this.condensedAnalysisComplete[i][col] == "Low") {
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
