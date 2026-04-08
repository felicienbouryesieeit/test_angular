import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testroute',
  imports: [CommonModule, RouterModule],
  template: ` 
  <p>testroute works!</p> 
  
  <a routerLink="details">Go to details</a>
  `,
  styleUrl: './testroute.css',
})
export class Testroute {}
