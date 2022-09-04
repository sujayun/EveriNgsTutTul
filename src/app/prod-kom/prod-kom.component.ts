import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

import { PrdSvc } from '../prd-svc.service'

@Component({
  selector: 'app-prod-kom',
  templateUrl: './prod-kom.component.html',
  styleUrls: ['./prod-kom.component.scss']
})
export class ProdKomComponent implements OnInit {

  constructor(public PrdSvcVar: PrdSvc, 
    public PopMdlVap: NgbModal) { }

  ngOnInit(): void {
  }

  getPathFromTtlFnc(TtlPsgVar:string)
  {
    return './' + TtlPsgVar.toLowerCase().replace(/ /g,'-')
  }

}
