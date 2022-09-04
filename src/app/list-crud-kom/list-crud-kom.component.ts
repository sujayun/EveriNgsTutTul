import { Component, OnInit } from '@angular/core';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-crud-kom',
  templateUrl: './list-crud-kom.component.html',
  styleUrls: ['./list-crud-kom.component.scss']
})
export class ListCrudKomComponent implements OnInit {

  NamIptVav = ''
  NamAryVar = ["Apple","Mango","Grapes", "Banana","Orange"]
  EdtIdxVar = -1
  ArwIknVar = faArrowUp

  constructor() { }

  ngOnInit(): void {}

  AddBtnFnc()
  {
    if(this.ChkVldIptFnc())
    { 
      this.NamAryVar.push(this.NamIptVav)
      this.NamIptVav=''
    }
  }

  EdtBtnFnc(IdxPsgVar:number)
  {
    this.NamIptVav = this.NamAryVar[IdxPsgVar]
    this.EdtIdxVar = IdxPsgVar
  }

  UpdBtnFnc()
  {
    if(this.ChkVldIptFnc())
    {
      this.NamAryVar[this.EdtIdxVar] = this.NamIptVav
      this.NamIptVav = ""
      this.EdtIdxVar = -1
    }
  }

  DelBtnFnc(IdxPsgVar:number)
  {
    if(confirm("Are your sure you want delete ?"))
    {
      this.NamAryVar.splice(IdxPsgVar,1)
    }
  }

  SrtAryFnc()
  {
    if(this.ArwIknVar == faArrowUp)
    {
      this.NamAryVar.sort((a,b)=> a.localeCompare(b))
      this.ArwIknVar = faArrowDown
    }
    else
    {
      this.NamAryVar.sort((a,b)=> b.localeCompare(a))
      this.ArwIknVar = faArrowUp
    }
  }

  ChkVldIptFnc()
  {
    if(this.NamIptVav == '')
    {
      alert("Please Enter an item")
      return false
    }
    else if(this.NamIptVav.length < 3)
    {
      alert("Item shud have min 3 char long")
      return false
    }
    else if(this.NamAryVar.find(ItmVar=> 
        ItmVar.toLowerCase() == this.NamIptVav.toLowerCase()))
    {
      alert("Item already present")
      return false
    }
    return true
  }

}
