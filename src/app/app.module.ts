import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlartsComponent } from './product-alarts/product-alarts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent }, /* Non avendo un path viene mostrato subito senza un router link */
      { path: 'products/:productId', component: ProductDetailsComponent }, /* avendo un path bisogna passare un router link per vedere questo componente. 
                                                                          NB quando ci sono i : vuol dire che si aspetta una variabile e non è una stringa fissa*/
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlartsComponent,
    ProductDetailsComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/