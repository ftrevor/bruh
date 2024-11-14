import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-dev-ops-defects-resolutionin-progress',
  templateUrl: './dev-ops-defects-resolutionin-progress.component.html',
  styleUrls: ['./dev-ops-defects-resolutionin-progress.component.css']
})
export class DevOpsDefectsResolutioninProgressComponent implements OnInit {
  // Raw Data
  excelData: any[] = [];
  pendingGDITAction: any[] = [];
  pendingDOSAction: any[] = [];
  resolutionInProgress: any[] = [];
  completed: any[] = [];
  closedFixed: any[] = [];
  closedNotADefect: any[] = [];

  // Condensed Data
  condensedData: any[] = [];
  condensedPendingGDITAction: any[] = [];
  condensedPendingDOSAction: any[] = [];
  condensedResolutionInProgress: any[] = [];
  condensedCompleted: any[] = [];
  condensedClosedFixed: any[] = [];
  condensedClosedNotADefect: any[] = [];

  serverityHigh: number = 0;
  serverityMedium: number = 0;
  serverityLow: number = 0;

  public chart: any;

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
    this.pendingGDITAction = this.sharedService.getData('Pending GDIT Action');
    this.pendingDOSAction = this.sharedService.getData('Pending DOS/DOH Action');
    this.resolutionInProgress = this.sharedService.getData('Resultion in Progress');
    this.completed = this.sharedService.getData('Completed');
    this.closedFixed = this.sharedService.getData('Closed Fixed');
    this.closedNotADefect = this.sharedService.getData('Closed Not a Defect');
    this.excelData = this.pendingGDITAction.concat(this.pendingDOSAction, this.resolutionInProgress,
      this.completed, this.closedFixed, this.closedNotADefect);
    this.condenseData();
    this.getCondensedCategories();
    this.createChart();
    this.getSeverity();
    this.severityChart();
  }

  displayData: any[] = [];

  getCondensedCategories() {
    for (let i = 0; i < this.condensedData.length; i++) {
      let col = 10;
      if (this.condensedData[i][col] == "GDIT Extended Analysis") {
        this.condensedPendingGDITAction.push(this.condensedData[i]);
      }
      else if (this.condensedData[i][col] == "DOS Action") {
        this.condensedPendingDOSAction.push(this.condensedData[i]);
      }
      else if (this.condensedData[i][col] == "Resolution In Progress") {
        this.condensedResolutionInProgress.push(this.condensedData[i]);
      }
      else if (this.condensedData[i][col] == "Completed") {
        this.condensedCompleted.push(this.condensedData[i]);
      }
      else if (this.condensedData[i][col] == "Closed Fixed") {
        this.condensedClosedFixed.push(this.condensedData[i]);
      }
      else if (this.condensedData[i][col] == "Closed Not a Defect") {
        this.condensedClosedNotADefect.push(this.condensedData[i]);
      }
    }

    let final = JSON.parse(JSON.stringify(this.condensedResolutionInProgress));
    let excludeCol = [2, 5, 8, 10, 14, 15];
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
    let colSum = 6;
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

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Pending GDIT Action', 'Pending DOS/DOH Action', 'Resolution in Progress', 'Completed', 'Closed Fixed', 'Closed Not a Defect',],
        datasets: [{
          label: '',
          data: [this.condensedPendingGDITAction.length, this.condensedPendingDOSAction.length, this.condensedResolutionInProgress.length, this.condensedCompleted.length, this.condensedClosedFixed.length, this.condensedClosedNotADefect.length],
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

  getSeverity() {
    for (let i = 0; i < this.condensedResolutionInProgress.length; i++) {
      let col = 3;
      if (this.condensedResolutionInProgress[i][col] == "High") {
        this.serverityHigh = this.serverityHigh + 1;
      }
      else if (this.condensedResolutionInProgress[i][col] == "Medium") {
        this.serverityMedium = this.serverityMedium + 1;
      }
      else if (this.condensedResolutionInProgress[i][col] == "Low") {
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