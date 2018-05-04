import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TokensComponent } from './tokens/tokens.component';
import { WalletsComponent } from './wallets/wallets.component';

@NgModule({
  declarations: [
    AppComponent,
    TokensComponent,
    WalletsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
