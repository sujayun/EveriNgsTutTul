import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'main-code',
  template: '<h1>this is HMT CODE </h1>',
  templateUrl: './app.component.html',
  styles: ['.NamCls{color:red}'],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  TtlLykVar=1
}
