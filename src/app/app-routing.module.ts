import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ProjectComponent } from './project/project.component';
// import { testRoute } from './test-route/test-route.component';

const routes: Routes = [
  // {path: 'project', component: ProjectComponent },
  // {path: 'test', component: testRoute }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
