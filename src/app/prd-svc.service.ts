import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrdSvc {

  TtlVar= "Dream Products"

  PrdAryVar = [
    {
      "TtlVak": "BENQ GV1 Projector",
      "DtlVak": "Boar Green Color Tiny portable pods",
      "AmtVak": 25000
    },
    {
      "TtlVak": "DJI Camera",
      "DtlVak": "Old Specs for budget",
      "AmtVak": 9999
    },
    {
      "TtlVak": "Sneekers Shoe",
      "DtlVak": "This is good and comfortable for casual wears",
      "AmtVak": 2500
    },
    {
      "TtlVak": "Mechanical Keychron",
      "DtlVak": "This makes wonderfull sounds",
      "AmtVak": 12000
    },
    {
      "TtlVak": "Noise Smart Watch",
      "DtlVak": "Budget friendly Smart Watch",
      "AmtVak": 12000
    }
  ]

  constructor() { }

  getItemByPath(PthPsgVar:string)
  {
    // pth-psg-var
    return this.PrdAryVar.find(PrdItmVar =>
      PrdItmVar.TtlVak.toLowerCase().split(" ").join("-") == PthPsgVar
      )
  }


}
