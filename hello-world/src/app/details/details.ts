import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule, RouterModule],
  template: ` 
  <p>details works!</p>
  
  
  <a routerLink="">Go back</a>
  `,
  styleUrl: './details.css',
})
export class Details {}
