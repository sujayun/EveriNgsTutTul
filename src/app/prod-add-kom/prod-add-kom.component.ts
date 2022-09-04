import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrdSvc } from '../prd-svc.service';

@Component({
  selector: 'prod-add-kom',
  templateUrl: './prod-add-kom.component.html',
  styleUrls: ['./prod-add-kom.component.scss']
})
export class ProdAddKomComponent implements OnInit {

  @Input() PopMdlVav: any

  AddPrdVar = {
    "TtlVak": "",
    "DtlVak": "",
    "AmtVak": 0
  }

  constructor(public PopMdlVap: NgbModal, public PrdSvcVar: PrdSvc) { }

  ngOnInit(): void {
  }

  AddPrdFnc()
  {
    this.PrdSvcVar.PrdAryVar.push(this.AddPrdVar)
    this.PopMdlVav.close()
    this.MtyPrdFomFnc()
  }

  MtyPrdFomFnc()
  {
    this.AddPrdVar = {
      "TtlVak": "",
      "DtlVak": "",
      "AmtVak": 0
    }
  }

}
