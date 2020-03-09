import { Component, OnInit, Input } from '@angular/core';
import { Partner } from 'src/app/_models/partner';

@Component({
  selector: 'app-partner-details',
  templateUrl: './partner-details.component.html',
  styleUrls: ['./partner-details.component.scss']
})
export class PartnerDetailsComponent implements OnInit {
   @Input() partner: Partner;
  constructor() { }

  ngOnInit() {
  }

}
