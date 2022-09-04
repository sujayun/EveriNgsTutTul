import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'news',
  templateUrl: './news-kom.component.html',
  styleUrls: ['./news-kom.component.scss']
})
export class NewsKomComponent implements OnInit {
  @Input('topic') topicVar:string='';
  @Input('detail') detailVar:string='';
  @Output() IncLykVaf = new EventEmitter()

  LykVar = 1

  constructor() { }

  ngOnInit(): void {
  }

  IncLykBtnFnc()
  {
    this.LykVar+=1
    this.IncLykVaf.emit(1)
  }

}
