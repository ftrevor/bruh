import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import Chart from 'chart.js/auto';



@Component({
  selector: 'app-dev-ops-defects-pending-gditaction',
  templateUrl: './dev-ops-defects-pending-gditaction.component.html',
  styleUrls: ['./dev-ops-defects-pending-gditaction.component.css']
})
export class DevOpsDefectsPendingGDITActionComponent implements OnInit {
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

  seperate: any[] = [];
  condensedSeperate: any[] = [];

  averageGDIT: number = 0;
  averageDOS: number = 0;
  averageTotal: number = 0;

  serverityHigh: number = 0;
  serverityMedium: number = 0;
  serverityLow: number = 0;

  chart: any;
  sevChart: any;
  ageChart: any;

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
    this.addAgeColumns();
    this.individualCondense();


    this.getAverageAges();
    this.createAgeChart();
    this.getSeverity();
    this.severityChart();

    this.condenseData();
    this.getCondensedCategories();
    this.createChart();


  }


  addAgeColumns() {
    this.seperate = this.pendingGDITAction.map(row => row.slice());

    if (this.seperate[0].length < 18) {
      for (let i = 0; i < this.seperate.length; i++) {
        this.seperate[i].splice(6, 0, 0);
        this.seperate[i].splice(7, 0, 0);
      }
    }

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

    let final = JSON.parse(JSON.stringify(this.condensedPendingGDITAction));
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

  individualCondense() {
    let map = new Map();
    let colSum = 6;
    let DOScol = 7;
    this.seperate.forEach(row => {
      let key = row[0];
      let action = row[5];
      let totalAge = row[8];
      let currentStatus = row[9];
      let resolution = row[10];

      if (!map.has(key)) {
        map.set(key, row.slice());
        let existingRow = map.get(key);
        existingRow[6] = Number(existingRow[8]);
      }
      else {
        let existingRow = map.get(key);
        existingRow[6] = Number(existingRow[8]);
        if (action == "DOS Action" && (currentStatus == "Clock Suspend - Triage" || currentStatus == "Policy Review") && resolution == "DOS Action") {
          existingRow[7] = Number(row[8]);
        }
        else {
          existingRow[7] = 0;
        }
        existingRow[8] = existingRow[6] + existingRow[7];
      }
    });

    let final = Array.from(map.values());
    this.condensedSeperate = final;    
  }

  condenseData() {
    let map = new Map();
    let colSum = 6;
    let DOScol = 7;
    this.excelData.forEach(row => {
      let key = row[0];

      if (!map.has(key)) {
        map.set(key, row.slice());
      }
      else {
        // let existingRow = map.get(key);
        // existingRow[colSum] = row[DOScol];

        // existingRow[colSum] = existingRow[colSum];
      }
    });

    let final = Array.from(map.values());
    this.condensedData = final;
  }

  getAverageAges() {
    let sumGDIT = 0;
    let sumDOS = 0;
    let sumTotal = 0;


    for (let i = 0; i < this.condensedSeperate.length; i++) {
      sumGDIT += this.condensedSeperate[i][6];
      sumDOS += this.condensedSeperate[i][7];
      sumTotal += Number(this.condensedSeperate[i][8]);
    }

    this.averageGDIT = sumGDIT / this.condensedSeperate.length;
    this.averageDOS = sumDOS / this.condensedSeperate.length;
    this.averageTotal = sumTotal / this.condensedSeperate.length;
  }

  createAgeChart() {
    this.ageChart = new Chart("age-chart", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Average GDIT Action Age', 'Average DOS Age', 'Total Age'],
        datasets: [{
          label: '',
          data: [this.averageGDIT, this.averageDOS, this.averageTotal],
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
        aspectRatio: 2.5
      }
    });
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
    for (let i = 0; i < this.condensedSeperate.length; i++) {
      let col = 3;
      if (this.condensedSeperate[i][col] == "High") {
        this.serverityHigh = this.serverityHigh + 1;
      }
      else if (this.condensedSeperate[i][col] == "Medium") {
        this.serverityMedium = this.serverityMedium + 1;
      }
      else if (this.condensedSeperate[i][col] == "Low") {
        this.serverityLow = this.serverityLow + 1;
      }
    }
  }

  severityChart() {
    this.sevChart = new Chart("severityChart", {
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

  testSaveExcel() {
    
  }
}
