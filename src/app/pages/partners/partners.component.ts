import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/_services/partner.service';
import { Partner } from 'src/app/_models/partner';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  patners: Partner[];
  constructor(private partnerService: PartnerService) { }

  ngOnInit() {

    this.partnerService.findAll().subscribe((res:Partner[])=> {
      this.patners = res['hydra:member'];
    })
  }

}
