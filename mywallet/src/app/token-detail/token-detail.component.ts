import { Component, OnInit, Input } from '@angular/core';
import {Token} from "../token";

@Component({
  selector: 'app-token-detail',
  templateUrl: './token-detail.component.html',
  styleUrls: ['./token-detail.component.css']
})
export class TokenDetailComponent implements OnInit {
  @Input() token: Token;

  constructor() { }

  ngOnInit() {
  }

}
