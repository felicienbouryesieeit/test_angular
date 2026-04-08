import { Component , Input } from '@angular/core';
import { Interfacetest } from '../interfacetest';


@Component({
  selector: 'test',
  imports: [],
  template: ` 
  <p>test works!</p>
  <div>{{Interfacetest.name}}</div>
  `,
  styleUrl: './test.css',
})
export class Test {
  @Input() Interfacetest !: Interfacetest;
}
