import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import {Test} from "./test/test";
import { Interfacetest } from './interfacetest';
import { CommonModule } from '@angular/common';
/*
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([])
  ]
}).catch(err => console.error(err));

*/
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Test,CommonModule,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('code code');
  name = 'Angular';
  interfacetestlist : Interfacetest[] = [
  {id : 1 , name : "test1"},
  {id : 2 , name : "test2"},
  {id : 3 , name : "test3"}
  ]

}