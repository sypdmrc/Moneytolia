import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CampaignsService } from '../campaigns.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [CampaignsService]
})
export class CreateComponent implements OnInit {
  constructor(
    private campaignService: CampaignsService,
    private formBuilder:FormBuilder
  ) {}

  campaignForm: FormGroup
  showDialog: boolean = false;
  dialogMessage:string="The campaign has been successfully added.";

  ngOnInit(): void {
    this.campaignForm = this.formBuilder.group({
      title: ["",[Validators.required]],
      description: ["",[Validators.required]],
    })
  }

  get title(){
    return this.campaignForm.get("title");
  }

  get description() {
    return this.campaignForm.get("description");
  }

  clearForm() {
    this.campaignForm.patchValue({
      title: '',
      description: ''
    });
  }

  createCampaign() {
    var currentDate= new Date().toLocaleDateString()
    const campaign = {
      id: 0,
      title: this.campaignForm.value.title,
      description: this.campaignForm.value.description,
      point: 0,
      datePublished:currentDate,
    }

  if(!(this.campaignForm.value.title =="" || this.campaignForm.value.description=="")){
    this.campaignService.setCampaigns(campaign);
    this.clearForm();
    this.showDialog=true
    setTimeout(() =>{
      this.showDialog=false;
    },1500)
  }
  }
}
