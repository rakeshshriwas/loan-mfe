import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-loan',
  styleUrl: './loan.scss',
  templateUrl: './loan.html',
})
export class Loan {  
  protected readonly title = signal('loan-mfe');
}
