import { Component, OnInit, Input } from '@angular/core';
import { Partner } from 'src/app/_models/partner';
import { PartnerService } from 'src/app/_services/partner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.scss']
})
export class PartnerListComponent implements OnInit {
  displayedColumns: string[] = ['ninea','rc','fname', 'lname','phone','country','city','address','status','actions'];
   partners: Partner[];
  loading: boolean = true;
  constructor(private partnerService: PartnerService, private router: Router) { }

  ngOnInit() {
    this.partnerService.findAll().subscribe(res => {
      this.partners = res['hydra:member']
    })
  }


  goToDetails(id: number)
  {
     this.router.navigate(['dashboard/partners',id]);
  }

}
