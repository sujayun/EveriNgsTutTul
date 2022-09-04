import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-kom',
  templateUrl: './cart-kom.component.html',
  styleUrls: ['./cart-kom.component.scss']
})
export class CartKomComponent implements OnInit {

  CartAryVar = [
    {
      TtlVak: 'Paneer Pizza',
      DtlVak: 'Paneer Cheese Double layer Pan',
      MrpVak: 300,
      QtyVak:1
    },
    {
      TtlVak: 'Paneer Burger',
      DtlVak: 'Family Maharaja Size triple Layer Cheese Burger',
      MrpVak: 150,
      QtyVak:1
    },
    {
      TtlVak: 'Paneer Role',
      DtlVak: 'Wide Role with Double Cheese Role',
      MrpVak: 80,
      QtyVak:1
    }
  ]

  TtlQtyVar = this.CartAryVar.length
  TtlUntMrpVar = 0
  TtlMrpVar = 0

  constructor() { }

  ngOnInit()
  {
    this.TtlUntMrpVar = this.CartAryVar.reduce((SumVar,ItmVar)=>
      SumVar + ItmVar.MrpVak,
      0
    )
    this.CalcTtlMrpFnc()
  }

  IncQtySupFnc(EvtRsgVar:any, IdxRsgVar: number)
  {
    this.TtlQtyVar += EvtRsgVar.ChgVak
    this.CartAryVar[IdxRsgVar].QtyVak = EvtRsgVar.QtyVak
    this.CalcTtlMrpFnc()
  }

  CalcTtlMrpFnc()
  {
    this.TtlMrpVar = this.CartAryVar.reduce((SumVar,ItmVar)=>
      SumVar + ItmVar.MrpVak*ItmVar.QtyVak,
      0
    )
  }

}
