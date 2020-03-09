import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-info-panel',
  templateUrl: './home-info-panel.component.html',
  styleUrls: ['./home-info-panel.component.scss']
})
export class HomeInfoPanelComponent implements OnInit {
  @Input() accounts: number;
  @Input() employees: number;
  @Input() balances: number;

  constructor() { }

  ngOnInit() {
  }

}
