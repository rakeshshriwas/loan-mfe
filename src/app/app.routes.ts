import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    loadComponent: () =>
      import('./loan/loan').then((m) => m.Loan),
  },
];
