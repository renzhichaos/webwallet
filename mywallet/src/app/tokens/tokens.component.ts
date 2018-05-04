import { Component, OnInit } from '@angular/core';
import { TOKENS } from "../mock-tokens";

@Component({
  selector: 'app-tokens',
  templateUrl: './tokens.component.html',
  styleUrls: ['./tokens.component.css']
})
export class TokensComponent implements OnInit {
  tokens = TOKENS;

  constructor() { }

  ngOnInit() {
  }

}
