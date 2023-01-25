import { Injectable } from '@angular/core'
import { Campaign } from './campaign.model'

@Injectable()
export class CampaignsService {
  constructor() {}

  campaigns: Campaign[]

  setCampaigns(campaignObject: Campaign) {
    this.campaigns = []
    if (localStorage.getItem('campaigns')) {
      this.campaigns = JSON.parse(localStorage.getItem('campaigns'))
      this.campaigns = [...this.campaigns, campaignObject]
    } else {
      this.campaigns = [campaignObject]
    }
    campaignObject.id = this.campaigns.length;
    localStorage.setItem('campaigns', JSON.stringify(this.campaigns))
  }

  getCampaigns(): Campaign[] {
    const data = localStorage.getItem('campaigns')
    if(data.length<0){
      localStorage.setItem('campaigns', JSON.stringify([]))
    }
    this.campaigns = JSON.parse(data)
    return this.campaigns
  }
}
