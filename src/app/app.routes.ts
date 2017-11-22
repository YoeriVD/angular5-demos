import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensesRootComponent } from './expenses';
import { AboutComponent } from './about';

const routes: Routes = [
  { path: 'expenses', component: ExpensesRootComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'expenses' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutesModule { }
