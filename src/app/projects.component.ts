import { Xliff } from '@angular/compiler';
import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { SharedService } from './shared.service';
import { SharedRFAService } from './sharedRFA.service';
import { SharedReportsService } from './sharedReports.service';
import { SharedPSRService } from './sharedPSR.service';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})

export class ProjectsComponent {
  excelData: any[] = [];
  public graphData: any[] = [];
  defectsData: any[] = [];
  RFAData: any[] = [];
  ReportsActiveData: any[] = [];
  ReportsClosedData: any[] = [];
  PSRData: any[] = [];


  public graphLabels: string[] = [];
  DOSdata: number[] = [];
  analysisData: any[] = [];
  public chart: any;

  // defects
  pendingDOSAction: any[] = [];
  pendingGDITAction: any[] = [];
  completed: any[] = [];
  resolutionInProgress: any[] = [];
  closedFixed: any[] = [];
  closedNotADefect: any[] = [];
  defectsSummary: any[] = [];

  // RFAs
  RFAPendingDOHVerification: any[] = [];
  RFAOpen: any[] = [];
  RFAPendingGDITAction: any[] = [];
  RFAPendingDOSAction: any[] = [];

  // Reports
  ReportsPendingGDITAction: any[] = [];
  ReportsPendingDOSReview: any[] = [];
  ReportsPendingDOHVerification: any[] = [];
  ReportsCompletedAwaitingDC: any[] = [];
  ReportsCompletedAutomatedReports: any[] = [];
  ReportsCompleted: any[] = [];
  reportsData: any[] = [];
  reportsCondensedData: any[] = [];

  // PSRs
  PSRPendingGDITAction: any[] = [];
  PSRPendingDOSReview: any[] = [];
  PSRPendingRequesterVerification: any[] = [];
  PSRClosedPendingRequesterVerification: any[] = [];
  PSRClosed: any[] = [];
  PSRActiveData: any[] = [];
  PSRClosedData: any[] = [];

  exportAllAsExcel() {
    let wb: XLSX.WorkBook = XLSX.utils.book_new();
    this.exportDefectsToExcel(wb);
    this.exportRFAsToExcel(wb);
    this.exportReportsToExcel(wb);
    this.exportPSRsToExcel(wb);
    XLSX.writeFile(wb, 'Dashboard 11-14.xlsx');
  }

  exportDefectsToExcel(wb: XLSX.WorkBook) {
    const ws1: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.defectscondensedPendingGDIT);
    // let wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws1, 'Defects Pending GDIT Action');

    const ws2: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.defectscondensedPendingDOS);
    XLSX.utils.book_append_sheet(wb, ws2, 'Defects Pending DOS-DOH Action');

    const ws3: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.defectscondensedResolutionInProgress);
    XLSX.utils.book_append_sheet(wb, ws3, 'Defects Resolution In Progress');

    const ws4: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.defectscondensedComplete);
    XLSX.utils.book_append_sheet(wb, ws4, 'Defects Completed');

    const ws5: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.defectscondensedClosedFixed);
    XLSX.utils.book_append_sheet(wb, ws5, 'Defects Closed Fixed');

    const ws6: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.defectscondensedClosedNotADefect);
    XLSX.utils.book_append_sheet(wb, ws6, 'Defects Closed Not a Defect');

    // XLSX.writeFile(wb, 'Defects.xlsx');
  }

  exportRFAsToExcel(wb: XLSX.WorkBook) {
    const ws1: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.condensedPendingGDIT);
    // let wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws1, 'RFAs Pending GDIT Action');

    const ws2: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.condensedPendingDOS);
    XLSX.utils.book_append_sheet(wb, ws2, 'RFAs Pending DOS Action');

    const ws3: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.condensedPendingDOHVerification);
    XLSX.utils.book_append_sheet(wb, ws3, 'RFAs Pending DOH Verification');


    // XLSX.writeFile(wb, 'RFAs.xlsx');
  }

  exportReportsToExcel(wb: XLSX.WorkBook) {
    const ws1: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.reportsCondensedPendingGDIT);
    // let wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws1, 'Reports Pending GDIT Action');

    const ws2: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.reportsCondensedPendingDOH);
    XLSX.utils.book_append_sheet(wb, ws2, 'Reports Pending DOS Review');

    const ws3: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.reportsCondensedCompletedAwaitingDC);
    XLSX.utils.book_append_sheet(wb, ws3, 'Reports Completed (Verified)');

    const ws4: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.reportsCondensedCompletedAutomatedReports);
    XLSX.utils.book_append_sheet(wb, ws4, 'Reports Completed (Automated)');

    const ws5: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.reportsCondensedCompleted);
    XLSX.utils.book_append_sheet(wb, ws5, 'Reports Completed (Closed)');

    // XLSX.writeFile(wb, 'Reports.xlsx');
  }

  exportPSRsToExcel(wb: XLSX.WorkBook) {
    const ws1: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.PSRPendingGDITAction);
    // let wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws1, 'PSRs Pending GDIT Action');

    const ws2: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.PSRPendingRequesterVerification);
    XLSX.utils.book_append_sheet(wb, ws2, 'PSRs Pending Verification');

    const ws3: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.PSRClosed);
    XLSX.utils.book_append_sheet(wb, ws3, 'PSRs Closed');

    const ws4: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.PSRClosedPendingRequesterVerification);
    XLSX.utils.book_append_sheet(wb, ws4, 'PSRs Closed Pending');


    // XLSX.writeFile(wb, 'PSRs.xlsx');
  }

  getDefectsCategories() {
    let col = 2;
    for (let i = 0; i < this.excelData.length; i++) {
      if (this.excelData[i][col] == "Pending DOS/DOH Action") {
        this.pendingDOSAction.push(Array.from(this.excelData[i]));
      }
      else if (this.excelData[i][col] == "Pending GDIT Action") {
        this.pendingGDITAction.push(Array.from(this.excelData[i]));
      }
      else if (this.excelData[i][col] == "Resolution in Progress") {
        this.resolutionInProgress.push(Array.from(this.excelData[i]));
      }
      else if (this.excelData[i][col] == "Completed (Fixed/InTest/Passed)") {
        this.completed.push(Array.from(this.excelData[i]));
      }
    }
  }

  getReportsCategories() {
    let col = 4;
    console.log()
    for (let i = 0; i < this.ReportsActiveData.length; i++) {
      if (this.ReportsActiveData[i][col] == "In Progress" || this.ReportsActiveData[i][col] == "New") {
        this.ReportsPendingGDITAction.push(Array.from(this.ReportsActiveData[i]));
      }
      else if (this.ReportsActiveData[i][col] == "DOS Review") {
        this.ReportsPendingDOSReview.push(Array.from(this.ReportsActiveData[i]));
      }
      else if (this.ReportsActiveData[i][col] == "Pending DOH Verification") {
        this.ReportsPendingDOHVerification.push(Array.from(this.ReportsActiveData[i]));
      }
      else if (this.ReportsActiveData[i][col] == "Verified - Awaiting DC") {
        this.ReportsCompleted.push(Array.from(this.ReportsActiveData[i]));
      }
    }
  }

  getPSRCategories() {
    let col = 3;
    console.log(this.PSRData);
    for (let i = 0; i < this.PSRData.length; i++) {
      if (this.PSRData[i][col] == "New" || this.PSRData[i][col] == "Approved"
        || this.PSRData[i][col] == "Working" || this.PSRData[i][col] == "Pending Information"
      ) {
        this.PSRPendingGDITAction.push(Array.from(this.PSRData[i]));
      }
      else if (this.PSRData[i][col] == "Pending OPs Verification" || this.PSRData[i][col] == "Pending Ops Review") {
        this.PSRPendingDOSReview.push(Array.from(this.PSRData[i]));
      }
      else if (this.PSRData[i][col] == "Pending Requestor Verification") {
        this.PSRPendingRequesterVerification.push(Array.from(this.PSRData[i]));
      }
    }
  }

  onFileChangePSRs(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files.');
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      console.log("test");
      
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[7];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.PSRActiveData = XLSX.utils.sheet_to_json(ws, { header: 1 });

      for (let i = 0; i < this.PSRActiveData.length; i++) {
        let col = 9;
        if (this.PSRActiveData[i][col] == "Pending GDIT Action") {
          this.PSRPendingGDITAction.push(this.PSRActiveData[i]);
        }
        else if (this.PSRActiveData[i][col] == "Pending Requestor Verification") {
          this.PSRPendingRequesterVerification.push(this.PSRActiveData[i]);
        }
      }
      

      this.sharedService.setArray('PSR Pending GDIT Action', this.PSRPendingGDITAction);
      this.sharedService.setArray('PSR Pending Requestor Verification', this.PSRPendingRequesterVerification);
      // this.sharedService.setArray('Reports Completed - Awaiting DC', this.ReportsCompletedAwaitingDC);
      // this.sharedService.setArray('Reports Completed - Automated Report', this.ReportsCompletedAutomatedReports);


      const closedname: string = wb.SheetNames[8];
      const closedws: XLSX.WorkSheet = wb.Sheets[closedname];

      this.PSRClosedData = XLSX.utils.sheet_to_json(closedws, { header: 1 });
      

      for (let i = 0; i < this.PSRClosedData.length; i++) {
        let col = 10;
        if (this.PSRClosedData[i][col] == "Closed") {
          this.PSRClosed.push(this.PSRClosedData[i]);
        }
        else if (this.PSRClosedData[i][col] == "Pending Requestor Verification") {
          this.PSRClosedPendingRequesterVerification.push(this.PSRClosedData[i]);
        }
      }

      this.sharedService.setArray('PSR Closed', this.PSRClosed);
      this.sharedService.setArray('PSR Closed Pending Requestor Verification', this.PSRClosedPendingRequesterVerification);


      this.PSRData = this.PSRActiveData.concat(this.PSRClosedData);      

      this.PSRData.forEach((row: any) => {
        const cols = [1, 15, 16];
        cols.forEach((column) => {
          if(typeof row[column] === 'number') {
            const date = new Date((row[column] - 25569) * 86400 * 1000);
            const formattedDate = (date.getMonth() + 1).toString().padStart(2, '0') + '/' +
            date.getDate().toString().padStart(2, '0') + '/' +
            date.getFullYear();
            // row[column] = date.toISOString().split('T')[0];
            row[column] = formattedDate;
          }
        });
      });
      // let map = new Map();
      // let colSum = 11;
      // this.reportsData.forEach(row => {
      //   let key = row[0];
  
      //   if (!map.has(key)) {
      //     map.set(key, row.slice());
      //   }
      //   else {
      //     let existingRow = map.get(key);
      //     existingRow[colSum] = Number(existingRow[colSum]);
      //     existingRow[colSum] += Number(row[colSum]);
      //   }
      // });
  
      // let final = Array.from(map.values());
      // this.psrco = final;
  
      // for (let i = 0; i < this.PSRData.length; i++) {
      //   let col = 9;
      //   if (this.PSRData[i][col] == "Pending GDIT Action") {
      //     this.reportsCondensedPendingGDIT.push(this.reportsCondensedData[i]);
      //   }
      //   else if (this.reportsCondensedData[i][col] == "Pending Requestor Verification") {
      //     this.reportsCondensedPendingDOH.push(this.reportsCondensedData[i]);
      //   }
      //   else if (this.reportsCondensedData[i][col] == "Completed - Awaiting DC") {
      //     this.reportsCondensedCompletedAwaitingDC.push(this.reportsCondensedData[i]);
      //   }
      //   else if (this.reportsCondensedData[i][col] == "Completed - Automated Report") {
      //     this.reportsCondensedCompletedAutomatedReports.push(this.reportsCondensedData[i]);
      //   }
      //   else if (this.reportsCondensedData[i][col] == "Completed") {
      //     this.reportsCondensedCompleted.push(this.reportsCondensedData[i]);
      //   }
      // }
    };

    reader.readAsBinaryString(target.files[0]);

  }



  reportsCondensedPendingGDIT: any[] = [];
  reportsCondensedPendingDOH: any[] = [];
  reportsCondensedCompletedAwaitingDC: any[] = [];
  reportsCondensedCompletedAutomatedReports: any[] = [];
  reportsCondensedCompleted: any[] = [];

  onFileChangeReports(event: any) {
    const target: DataTransfer = <DataTransfer>(event.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files.');
    }
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[5];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      this.ReportsActiveData = XLSX.utils.sheet_to_json(ws, { header: 1 });

      for (let i = 0; i < this.ReportsActiveData.length; i++) {
        let col = 13;
        if (this.ReportsActiveData[i][col] == "Pending GDIT Action") {
          this.ReportsPendingGDITAction.push(this.ReportsActiveData[i]);
        }
        else if (this.ReportsActiveData[i][col] == "Pending DOH Verification") {
          this.ReportsPendingDOHVerification.push(this.ReportsActiveData[i]);
        }
        else if (this.ReportsActiveData[i][col] == "Completed - Awaiting DC") {
          this.ReportsCompletedAwaitingDC.push(this.ReportsActiveData[i]);
        }
        else if (this.ReportsActiveData[i][col] == "Completed - Automated Report") {
          this.ReportsCompletedAutomatedReports.push(this.ReportsActiveData[i]);
        }
      }

      this.sharedService.setArray('Reports Pending GDIT Action', this.ReportsPendingGDITAction);
      this.sharedService.setArray('Reports Pending DOH Verification', this.ReportsPendingDOHVerification);
      this.sharedService.setArray('Reports Completed - Awaiting DC', this.ReportsCompletedAwaitingDC);
      this.sharedService.setArray('Reports Completed - Automated Report', this.ReportsCompletedAutomatedReports);


      const closedname: string = wb.SheetNames[6];
      const closedws: XLSX.WorkSheet = wb.Sheets[closedname];

      this.ReportsClosedData = XLSX.utils.sheet_to_json(closedws, { header: 1 });

      for (let i = 0; i < this.ReportsClosedData.length; i++) {
        let col = 13;
        if (this.ReportsClosedData[i][col] == "Completed") {
          this.ReportsCompleted.push(this.ReportsClosedData[i]);
        }
      }

      this.sharedService.setArray('Reports Completed', this.ReportsCompleted);

      this.reportsData = this.ReportsActiveData.concat(this.ReportsClosedData);      

      this.reportsData.forEach((row: any) => {
        const cols = [9, 17, 18];
        cols.forEach((column) => {
          if(typeof row[column] === 'number') {
            const date = new Date((row[column] - 25569) * 86400 * 1000);
            const formattedDate = (date.getMonth() + 1).toString().padStart(2, '0') + '/' +
            date.getDate().toString().padStart(2, '0') + '/' +
            date.getFullYear();
            // row[column] = date.toISOString().split('T')[0];
            row[column] = formattedDate;
          }
        });
      });

      let map = new Map();
      let colSum = 11;
      this.reportsData.forEach(row => {
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
      this.reportsCondensedData = final;
  
      for (let i = 0; i < this.reportsCondensedData.length; i++) {
        let col = 13;
        if (this.reportsCondensedData[i][col] == "Pending GDIT Action") {
          this.reportsCondensedPendingGDIT.push(this.reportsCondensedData[i]);
        }
        else if (this.reportsCondensedData[i][col] == "Pending DOH Verification") {
          this.reportsCondensedPendingDOH.push(this.reportsCondensedData[i]);
        }
        else if (this.reportsCondensedData[i][col] == "Completed - Awaiting DC") {
          this.reportsCondensedCompletedAwaitingDC.push(this.reportsCondensedData[i]);
        }
        else if (this.reportsCondensedData[i][col] == "Completed - Automated Report") {
          this.reportsCondensedCompletedAutomatedReports.push(this.reportsCondensedData[i]);
        }
        else if (this.reportsCondensedData[i][col] == "Completed") {
          this.reportsCondensedCompleted.push(this.reportsCondensedData[i]);
        }
      }
    };

    reader.readAsBinaryString(target.files[0]);

  }

condensedData: any[] = [];
condensedPendingGDIT: any[] = [];
condensedPendingDOHVerification: any[] = [];
condensedPendingDOS: any[] = [];

onFileChangeRFAs(event: any) {
  const target: DataTransfer = <DataTransfer>(event.target);
  if (target.files.length !== 1) {
    throw new Error('Cannot use multiple files.');
  }
  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {
    const bstr: string = e.target.result;
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

    const wsname: string = wb.SheetNames[3];
    const ws: XLSX.WorkSheet = wb.Sheets[wsname];

    this.RFAData = XLSX.utils.sheet_to_json(ws, { header: 1 });

    this.RFAData.forEach((row: any) => {
      const cols = [7, 15, 16];
      cols.forEach((column) => {
        if(typeof row[column] === 'number') {
          const date = new Date((row[column] - 25569) * 86400 * 1000);
          const formattedDate = (date.getMonth() + 1).toString().padStart(2, '0') + '/' +
          date.getDate().toString().padStart(2, '0') + '/' +
          date.getFullYear();
          // row[column] = date.toISOString().split('T')[0];
          row[column] = formattedDate;
        }
      });
    });

    for (let i = 0; i < this.RFAData.length; i++) {
      let col = 10;
      if (this.RFAData[i][col] == "Pending DOH Verification") {
        this.RFAPendingDOHVerification.push(this.RFAData[i]);
      }
      else if (this.RFAData[i][col] == "Assigned" || this.RFAData[i][col] == "Pre-Assign") {
        this.RFAPendingGDITAction.push(this.RFAData[i]);
      }
      else if (this.RFAData[i][col] == "Analysis Complete" || this.RFAData[i][col] == "Open") {
        this.RFAPendingDOSAction.push(this.RFAData[i]);
      }
    }

    this.sharedService.setArray('RFA Active Pending DOH Verification', this.RFAPendingDOHVerification);
    this.sharedService.setArray('RFA Pending GDIT Action', this.RFAPendingGDITAction);
    this.sharedService.setArray('RFA Pending DOS Action', this.RFAPendingDOSAction);

    let map = new Map();
    let colSum = 9
    this.RFAData.forEach(row => {
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

  };

  reader.readAsBinaryString(target.files[0]);
}

defectscondensedData: any[] = [];
defectscondensedPendingGDIT: any[] = [];
defectscondensedResolutionInProgress: any[] = [];
defectscondensedPendingDOS: any[] = [];
defectscondensedComplete: any[] = [];
defectscondensedClosedFixed: any[] = [];
defectscondensedClosedNotADefect: any[] = [];
excelData2: any[] = [];
excelData3: any[] = [];
defectesData: any[] = [];

onFileChangeDefects(event: any) {
  const target: DataTransfer = <DataTransfer>(event.target);
  if (target.files.length !== 1) {
    throw new Error('Cannot use multiple files.');
  }
  const reader: FileReader = new FileReader();
  reader.onload = (e: any) => {
    const bstr: string = e.target.result;
    const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

    const triageSheet: string = wb.SheetNames[0];
    const triagews: XLSX.WorkSheet = wb.Sheets[triageSheet];

    const outofTriageSheet: string = wb.SheetNames[1];
    const outofTriagews: XLSX.WorkSheet = wb.Sheets[outofTriageSheet];

    const closedSheet: string = wb.SheetNames[2];
    const closedws: XLSX.WorkSheet = wb.Sheets[closedSheet];

  this.excelData = XLSX.utils.sheet_to_json(triagews, { header: 1 });

  this.excelData.forEach((row: any) => {
    const cols = [14, 15];
    cols.forEach((column) => {
      if(typeof row[column] === 'number') {
        const date = new Date((row[column] - 25569) * 86400 * 1000);
        const formattedDate = (date.getMonth() + 1).toString().padStart(2, '0') + '/' +
        date.getDate().toString().padStart(2, '0') + '/' +
        date.getFullYear();
        // row[column] = date.toISOString().split('T')[0];
        row[column] = formattedDate;
      }
    });
  });


    for (let i = 0; i < this.excelData.length; i++) {
      let col = 10;
      if (this.excelData[i][col] == "GDIT Extended Analysis") {
        this.pendingGDITAction.push(this.excelData[i]);
      }
      else if (this.excelData[i][col] == "DOS Action") {
        this.pendingDOSAction.push(this.excelData[i]);
      }
    }

    this.excelData2 = XLSX.utils.sheet_to_json(outofTriagews, { header: 1 });

    this.excelData2.forEach((row: any) => {
      const cols = [14, 15];
      cols.forEach((column) => {
        if(typeof row[column] === 'number') {
          const date = new Date((row[column] - 25569) * 86400 * 1000);
          const formattedDate = (date.getMonth() + 1).toString().padStart(2, '0') + '/' +
          date.getDate().toString().padStart(2, '0') + '/' +
          date.getFullYear();
          // row[column] = date.toISOString().split('T')[0];
          row[column] = formattedDate;
        }
      });
    });
    for (let i = 0; i < this.excelData2.length; i++) {
      let col = 10;
      if (this.excelData2[i][col] == "Resolution In Progress") {
        this.resolutionInProgress.push(this.excelData2[i]);
      }
      else if (this.excelData2[i][col] == "Completed") {
        this.completed.push(this.excelData2[i]);
      }
    }

    this.excelData3 = XLSX.utils.sheet_to_json(closedws, { header: 1 });

    this.excelData3.forEach((row: any) => {
      const cols = [14, 15, 17];
      cols.forEach((column) => {
        if(typeof row[column] === 'number') {
          const date = new Date((row[column] - 25569) * 86400 * 1000);
          const formattedDate = (date.getMonth() + 1).toString().padStart(2, '0') + '/' +
          date.getDate().toString().padStart(2, '0') + '/' +
          date.getFullYear();
          // row[column] = date.toISOString().split('T')[0];
          row[column] = formattedDate;
        }
      });
    });
    for (let i = 0; i < this.excelData3.length; i++) {
      let col = 10;
      if (this.excelData3[i][col] == "Closed Fixed") {
        this.closedFixed.push(this.excelData3[i]);
      }
      else if (this.excelData3[i][col] == "Closed Not a Defect") {
        this.closedNotADefect.push(this.excelData3[i]);
      }
    }

    this.sharedService.setArray('Pending GDIT Action', this.pendingGDITAction);
    this.sharedService.setArray('Pending DOS/DOH Action', this.pendingDOSAction);
    this.sharedService.setArray('Resultion in Progress', this.resolutionInProgress);
    this.sharedService.setArray('Completed', this.completed);
    this.sharedService.setArray('Closed Fixed', this.closedFixed);
    this.sharedService.setArray('Closed Not a Defect', this.closedNotADefect);

    this.defectesData = this.excelData.concat(this.excelData2, this.excelData3);

    let map = new Map();
    let colSum = 6;
    this.defectesData.forEach(row => {
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
    this.defectscondensedData = final;

    for (let i = 0; i < this.defectscondensedData.length; i++) {
      let col = 10;
      if (this.defectscondensedData[i][col] == "GDIT Extended Analysis") {
        this.defectscondensedPendingGDIT.push(this.defectscondensedData[i]);
      }
      else if (this.defectscondensedData[i][col] == "DOS Action") {
        this.defectscondensedPendingDOS.push(this.defectscondensedData[i]);
      }
      else if (this.defectscondensedData[i][col] == "Resolution In Progress") {
        this.defectscondensedResolutionInProgress.push(this.defectscondensedData[i]);
      }
      else if (this.defectscondensedData[i][col] == "Completed") {
        this.defectscondensedComplete.push(this.defectscondensedData[i]);
      }
      else if (this.defectscondensedData[i][col] == "Closed Fixed") {
        this.defectscondensedClosedFixed.push(this.defectscondensedData[i]);
      }
      else if (this.defectscondensedData[i][col] == "Closed Not a Defect") {
        this.defectscondensedClosedNotADefect.push(this.defectscondensedData[i]);
      }
    }
  };



  reader.readAsBinaryString(target.files[0]);
}

constructor(private sharedService: SharedService,
  private sharedRFAService: SharedRFAService,
  private sharedReportsService: SharedReportsService,
  private sharedPSRService: SharedPSRService) {
}

}