import { ShopEffects } from './store/effects';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { ShopReducer } from './store/reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent, HomeComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ shop: ShopReducer }),
    EffectsModule.forRoot([ShopEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
