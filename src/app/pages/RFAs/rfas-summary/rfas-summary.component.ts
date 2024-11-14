import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-rfas-summary',
  templateUrl: './rfas-summary.component.html',
  styleUrls: ['./rfas-summary.component.css']
})
export class RfasSummaryComponent implements OnInit {
  // Raw Data
  excelData: any[] = [];
  pendingGDIT: any[] = [];
  pendingDOS: any[] = [];
  pendingDOHVerification: any[] = [];

  // Condensed Data
  condensedData: any[] = [];
  displayData: any[] = [];
  condensedPendingGDIT: any[] = [];
  condensedPendingDOHVerification: any[] = [];
  condensedPendingDOS: any[] = [];

  public chart: any;

  ngOnInit(): void {
    this.pendingDOHVerification = this.sharedService.getData('RFA Active Pending DOH Verification');
    this.pendingGDIT = this.sharedService.getData('RFA Pending GDIT Action');
    this.pendingDOS = this.sharedService.getData('RFA Pending DOS Action');
    this.excelData = this.pendingDOHVerification.concat(this.pendingGDIT, this.pendingDOS);
    this.condenseData();
    this.getCondensedCategories();
    this.createChart();
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
  }

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

    let excludeCol = [2, 7, 8, 10, 11, 15, 16];
    excludeCol.sort((a, b) => b - a);

    final = final.map(row => {
      excludeCol.forEach(colIndex => {
        row.splice(colIndex, 1);
      });

      return row;
    });

    this.displayData = JSON.parse(JSON.stringify(final));
    
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
      }
    });
  }

  serverityHigh: number = 0;
  serverityMedium: number = 0;
  serverityLow: number = 0;

}
