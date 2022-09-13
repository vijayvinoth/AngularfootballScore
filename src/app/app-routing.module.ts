import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentComponent } from './current/current.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ResultComponent } from './result/result.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  { path: 'current', component: CurrentComponent },
  { path: 'result', component: ResultComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: '', redirectTo: 'current', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
