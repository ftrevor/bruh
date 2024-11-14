import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-rfas-pending-gdit-action',
  templateUrl: './rfas-pending-gdit-action.component.html',
  styleUrls: ['./rfas-pending-gdit-action.component.css']
})
export class RfasPendingGditActionComponent implements OnInit {
  // Raw Data
  excelData: any[] = [];
  pendingGDIT: any[] = [];
  pendingDOS: any[] = [];
  pendingDOHVerification: any[] = [];

  // Condensed Data
  condensedData: any[] = [];
  condensedPendingGDIT: any[] = [];
  condensedPendingDOHVerification: any[] = [];
  condensedPendingDOS: any[] = [];
  // displayFocus: any[] = [];

  public chart: any;

  ngOnInit(): void {
    this.pendingDOHVerification = this.sharedService.getData('RFA Active Pending DOH Verification');
    this.pendingGDIT = this.sharedService.getData('RFA Pending GDIT Action');
    this.pendingDOS = this.sharedService.getData('RFA Pending DOS Action');
    this.excelData = this.pendingDOHVerification.concat(this.pendingGDIT, this.pendingDOS);
    this.condenseData();
    this.getCondensedCategories();
    this.createChart();
    this.getSeverity();
    this.severityChart();
  }

  totalDaysAverage: Number = 0;


  getCondensedCategories() {
    for (let i = 0; i < this.condensedData.length; i++) {
      let col = 10;
      if (this.condensedData[i][col] == "Pending DOH Verification") {
        this.condensedPendingDOHVerification.push(this.condensedData[i]);
      }
      else if (this.condensedData[i][col] == "Assigned" || this.condensedData[i][col] == "Pre-Assign") {
        this.condensedPendingGDIT.push(this.condensedData[i]);
      }
      else if (this.condensedData[i][col] == "Analysis Complete" || this.condensedData[i][col] == "Open") {
        this.condensedPendingDOS.push(this.condensedData[i]);
      }
    }

    let final = JSON.parse(JSON.stringify(this.condensedPendingGDIT));
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

  displayData: any[] = [];

  condenseData() {
    let map = new Map();
    let colSum = 9
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
    this.condensedData = JSON.parse(JSON.stringify(final));

  }

  constructor(private sharedService: SharedService) {
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart
      data: {// values on X-Axis
        labels: ['Pending DOH Verification', 'Pending GDIT Action', 'Pending DOS Action'],
        datasets: [{
          label: 'Category',
          data: [this.condensedPendingDOHVerification.length, this.condensedPendingGDIT.length, this.condensedPendingDOS.length],
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

  getSeverity() {
    for (let i = 0; i < this.condensedPendingGDIT.length; i++) {
      let col = 3;
      if (this.condensedPendingGDIT[i][col] == "High") {
        this.serverityHigh = this.serverityHigh + 1;
      }
      else if (this.condensedPendingGDIT[i][col] == "Medium") {
        this.serverityMedium = this.serverityMedium + 1;
      }
      else if (this.condensedPendingGDIT[i][col] == "Low") {
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
