import { Component, OnInit } from '@angular/core'
import { Campaign } from './campaign.model'
import { CampaignsService } from './campaigns.service'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-campaigns',
  templateUrl: './campaigns.component.html',
  styleUrls: ['./campaigns.component.scss'],
  providers:[CampaignsService]
})
export class CampaignsComponent implements OnInit{

 constructor(private campaignService: CampaignsService){}

  campaigns: Campaign[] = []
  showModal: boolean = false
  id:number;
  values={
    title:"",
    description:""
  }

  ngOnInit(): void {
    this.campaigns =this.campaignService.getCampaigns();
  }

  openModal(item:any) {
    this.showModal = true
    this.id=item.id;
    this.values.title=item.title;
    this.values.description=item.description
  }

  updateCampaign(modalForm:NgForm) {
    const modalObject={
      id:this.id,
      title:modalForm.value.title,
      description:modalForm.value.description
    }

    var item=this.campaigns.filter(campaign => campaign.id==modalObject.id)[0];
    item.title=modalObject.title
    item.description=modalObject.description

    localStorage.setItem('campaigns', JSON.stringify(this.campaigns))
    this.showModal = false
  }

  deleteCampaign(id: number) {
    this.campaigns=this.campaigns.filter(campaign => campaign.id!==id);

    localStorage.setItem('campaigns', JSON.stringify(this.campaigns))
    this.showModal = false
  }

  incrementPoint(item:any) {
    item.point++
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns))
  }

  decrementPoint(item:any) {
    if (item.point > 0) {
      item.point--;
    }
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns))
  }

  closeModal() {
    this.showModal = false
  }
}
