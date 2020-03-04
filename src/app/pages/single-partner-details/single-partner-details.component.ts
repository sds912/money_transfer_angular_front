import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartnerService } from 'src/app/_services/partner.service';
import { Partner } from 'src/app/_models/partner';

@Component({
  selector: 'app-single-partner-details',
  templateUrl: './single-partner-details.component.html',
  styleUrls: ['./single-partner-details.component.scss']
})
export class SinglePartnerDetailsComponent implements OnInit {
  partner: Partner;
  constructor(private route: ActivatedRoute, private partnerService: PartnerService) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');
    this.partnerService.findById(+id).subscribe((res: Partner)=> {
       this.partner = res;
       console.log(this.partner)
    })

  }

}
