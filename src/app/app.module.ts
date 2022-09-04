import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomKomComponent } from './hom-kom/hom-kom.component';
import { NewsKomComponent } from './news-kom/news-kom.component';
import { ProdKomComponent } from './prod-kom/prod-kom.component';
import { CartKomComponent } from './cart-kom/cart-kom.component';
import { CartItemKomComponent } from './cart-item-kom/cart-item-kom.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListCrudKomComponent } from './list-crud-kom/list-crud-kom.component';
import { ProdDetailKomComponent } from './prod-detail-kom/prod-detail-kom.component';
import { ProdAddKomComponent } from './prod-add-kom/prod-add-kom.component';


const AppNavNryVar: Routes = [
  { path: '', component: HomKomComponent },
  { path: 'prod', component: ProdKomComponent },
  { path: 'prod/:NamVak', component: ProdDetailKomComponent },
  { path: 'cart', component: CartKomComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NewsKomComponent,
    ProdKomComponent,
    CartKomComponent,
    CartItemKomComponent,
    ListCrudKomComponent,
    HomKomComponent,
    ProdDetailKomComponent,
    ProdAddKomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(AppNavNryVar),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule {
  
}
