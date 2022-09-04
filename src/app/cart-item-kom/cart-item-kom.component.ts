import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'cart-item-kom',
  templateUrl: './cart-item-kom.component.html',
  styleUrls: ['./cart-item-kom.component.scss']
})
export class CartItemKomComponent implements OnInit
{
  @Input('title') TtlVar=""
  @Input('detail') DtlVar=""
  @Input('cost') MrpVar=0
  @Output() IncQtySubFnc = new EventEmitter()

  LykVar=false
  QtyVar = 1

  NamFasIknVar = fasHeart

  constructor() { }

  ngOnInit(): void {
  }

  ChjQtyFnc(ChgValVar:number)
  {
    if((ChgValVar == 1 && this.QtyVar < 10) ||
    (ChgValVar == -1 && this.QtyVar > 1))
    {
      this.QtyVar += ChgValVar
      this.IncQtySubFnc.emit({
        ChgVak: ChgValVar,
        QtyVak:this.QtyVar
      })
    }  
  }

  IknTglFnc()
  {
    if(this.NamFasIknVar == fasHeart)
      this.NamFasIknVar = farHeart
    else
      this.NamFasIknVar = fasHeart
  }

}
