import { Component, OnInit } from '@angular/core';
import { TOKENS } from "../mock-tokens";
import {Token} from "../token";

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {
  tokens = TOKENS;
  selectedToken: Token;

  constructor() { }

  ngOnInit() {
  }

  onSelect(token: Token):void {
    this.selectedToken = token;
  }

}
