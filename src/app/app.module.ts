import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BaseChartDirective } from 'ng2-charts';
import { NgChartsModule } from 'ng2-charts';



import { ProjectsComponent } from './projects.component';
import { NavbarComponent } from './navbar.component';
import { ProjectComponent } from './project/project.component';
import { DevOpsDefectsComponent } from './dev-ops-defects/dev-ops-defects.component';
import { DevOpsRFAsComponent } from './dev-ops-rfas/dev-ops-rfas.component';
import { DevOpsReportsComponent } from './dev-ops-reports/dev-ops-reports.component';
import { DevOpsPSRsComponent } from './dev-ops-psrs/dev-ops-psrs.component';
import { Sticker1Component } from './sticker1/sticker1.component';
import { Sticker2Component } from './sticker2/sticker2.component';
import { Sticker3Component } from './sticker3/sticker3.component';
import { Sticker4Component } from './sticker4/sticker4.component';
import { Sticker5Component } from './sticker5/sticker5.component';
import { Module1Component } from './module1/module1.component';
import { Module2Component } from './module2/module2.component';
import { Module3Component } from './module3/module3.component';
import { Module4Component } from './module4/module4.component';
import { BigGraphComponent } from './big-graph/big-graph.component';
import { Sticker6Component } from './sticker6/sticker6.component';
import { Sticker7Component } from './sticker7/sticker7.component';
import { Sticker8Component } from './sticker8/sticker8.component';
import { Banner1Component } from './banner1/banner1.component';
import { FooterComponent } from './footer/footer.component';
import { TestRouteComponent } from './test-route/test-route.component';
import { DevOpsDefectsPendingGDITActionComponent } from './pages/dev-ops-defects-pending-gditaction/dev-ops-defects-pending-gditaction.component';
import { DevOpsDefectsPendingDOSDOHActionComponent } from './pages/dev-ops-defects-pending-dos-dohaction/dev-ops-defects-pending-dos-dohaction.component';
import { DevOpsDefectsResolutioninProgressComponent } from './pages/dev-ops-defects-resolutionin-progress/dev-ops-defects-resolutionin-progress.component';
import { DevOpsDefectsCompletedFixedInTestPassedComponent } from './pages/dev-ops-defects-completed-fixed-in-test-passed/dev-ops-defects-completed-fixed-in-test-passed.component';
import { DevOpsDefectsSummaryComponent } from './pages/dev-ops-defects-summary/dev-ops-defects-summary.component';
import { PSRSummaryComponent } from './pages/PSRs/psr-summary/psr-summary.component';
import { PSRPendingGditActionComponent } from './pages/PSRs/psr-pending-gdit-action/psr-pending-gdit-action.component';
import { PSRPendingDosReviewComponent } from './pages/PSRs/psr-pending-dos-review/psr-pending-dos-review.component';
import { PSRPendingRequesterVerificationComponent } from './pages/PSRs/psr-pending-requester-verification/psr-pending-requester-verification.component';
import { ReportsPendingGditActionComponent } from './pages/Reports/reports-pending-gdit-action/reports-pending-gdit-action.component';
import { ReportsPendingDosReviewComponent } from './pages/Reports/reports-pending-dos-review/reports-pending-dos-review.component';
import { ReportsPendingDosVerificationComponent } from './pages/Reports/reports-pending-dos-verification/reports-pending-dos-verification.component';
import { ReportsCompletedComponent } from './pages/Reports/reports-completed/reports-completed.component';
import { RfasPendingGditActionComponent } from './pages/RFAs/rfas-pending-gdit-action/rfas-pending-gdit-action.component';
import { RfasPendingDosReviewComponent } from './pages/RFAs/rfas-pending-dos-review/rfas-pending-dos-review.component';
import { RfasPendingDohVerificationComponent } from './pages/RFAs/rfas-pending-doh-verification/rfas-pending-doh-verification.component';
import { RfasSummaryComponent } from './pages/RFAs/rfas-summary/rfas-summary.component';
import { ReportsSummaryComponent } from './pages/Reports/reports-summary/reports-summary.component';
import { DefectsClosedFixedComponent } from './pages/defects-closed-fixed/defects-closed-fixed.component';
import { DefectsClosedNotADefectComponent } from './pages/defects-closed-not-a-defect/defects-closed-not-a-defect.component';
import { RfasCompletedComponent } from './pages/RFAs/rfas-completed/rfas-completed.component';
import { ReportsAwaitingDcComponent } from './pages/Reports/reports-awaiting-dc/reports-awaiting-dc.component';
import { ReportsAutomatedReportComponent } from './pages/Reports/reports-automated-report/reports-automated-report.component';
import { PsrClosedComponent } from './pages/PSRs/psr-closed/psr-closed.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProjectsComponent,
    ProjectComponent,
    DevOpsDefectsComponent,
    DevOpsRFAsComponent,
    DevOpsReportsComponent,
    DevOpsPSRsComponent,
    Sticker1Component,
    Sticker2Component,
    Sticker3Component,
    Sticker4Component,
    Sticker5Component,
    Module1Component,
    Module2Component,
    Module3Component,
    Module4Component,
    BigGraphComponent,
    Sticker6Component,
    Sticker7Component,
    Sticker8Component,
    Banner1Component,
    FooterComponent,
    TestRouteComponent,
    DevOpsDefectsPendingGDITActionComponent,
    DevOpsDefectsPendingDOSDOHActionComponent,
    DevOpsDefectsResolutioninProgressComponent,
    DevOpsDefectsCompletedFixedInTestPassedComponent,
    DevOpsDefectsSummaryComponent,
    PSRSummaryComponent,
    PSRPendingGditActionComponent,
    PSRPendingDosReviewComponent,
    PSRPendingRequesterVerificationComponent,
    ReportsPendingGditActionComponent,
    ReportsPendingDosReviewComponent,
    ReportsPendingDosVerificationComponent,
    ReportsCompletedComponent,
    RfasPendingGditActionComponent,
    RfasPendingDosReviewComponent,
    RfasPendingDohVerificationComponent,
    RfasSummaryComponent,
    ReportsSummaryComponent,
    DefectsClosedFixedComponent,
    DefectsClosedNotADefectComponent,
    RfasCompletedComponent,
    ReportsAwaitingDcComponent,
    ReportsAutomatedReportComponent,
    PsrClosedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    RouterModule.forRoot([
      { path: 'test', component: TestRouteComponent },
      // defects
      { path: 'devopsdefectscompleted', component: DevOpsDefectsCompletedFixedInTestPassedComponent },
      { path: 'devopspendingDOS', component: DevOpsDefectsPendingDOSDOHActionComponent },
      { path: 'devopspendingGDIT', component: DevOpsDefectsPendingGDITActionComponent },
      { path: 'devopsresolution', component: DevOpsDefectsResolutioninProgressComponent },
      { path: 'devopssummary', component: DevOpsDefectsSummaryComponent },
      { path: 'devopsclosedfixed', component:  DefectsClosedFixedComponent},
      { path: 'devopsclosednotadefect', component: DefectsClosedNotADefectComponent },

      // rfas
      { path: 'rfapendingdohverification', component: RfasPendingDohVerificationComponent },
      { path: 'rfapendingGDIT', component: RfasPendingGditActionComponent },
      { path: 'rfapendingdos', component: RfasPendingDosReviewComponent },
      { path: 'rfacompleted', component: RfasCompletedComponent },
      { path: 'rfasummary', component: RfasSummaryComponent },
      // reports
      { path: 'reportspendingdohverification', component: ReportsPendingDosVerificationComponent },
      { path: 'reportspendingGDIT', component: ReportsPendingGditActionComponent },
      { path: 'reportspendingdos', component: ReportsPendingDosReviewComponent },
      { path: 'reportssummary', component: ReportsSummaryComponent },
      { path: 'reportscompleted', component: ReportsCompletedComponent },
      { path: 'reportsawaitingverification', component: ReportsAwaitingDcComponent },
      { path: 'reportsautomated', component: ReportsAutomatedReportComponent },

      // psrs
      { path: 'psrpendingverification', component: PSRPendingRequesterVerificationComponent },
      { path: 'psrpendingGDIT', component: PSRPendingGditActionComponent },
      { path: 'psrclosed', component: PsrClosedComponent },
      { path: 'psrclosedpendingverification', component: PSRPendingDosReviewComponent },
      { path: 'psrsummary', component: PSRSummaryComponent },

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
