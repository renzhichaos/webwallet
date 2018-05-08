import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { TokensComponent } from './tokens/tokens.component';
import { WalletsComponent } from './wallets/wallets.component';
import { TokenDetailComponent } from './token-detail/token-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TokensComponent,
    WalletsComponent,
    TokenDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
