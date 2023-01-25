import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CampaignsComponent } from './campaigns.component'
import { CampaignComponent } from './campaign/campaign.component'
import { CreateComponent } from './create/create.component'
import { CampaignsHomeComponent } from './campaigns-home/campaigns-home.component'
import { CampaignsRoutingModule } from './campaigns.router.module'
import { SidebarComponent } from '../sidebar/sidebar.component'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from '../header/header.component'

@NgModule({
  declarations: [
    CampaignsComponent,
    CampaignComponent,
    CreateComponent,
    CampaignsHomeComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    CampaignsRoutingModule,
    CommonModule,
  ],
  exports: [
    CampaignsComponent,
    CampaignComponent,
    CreateComponent,
    CampaignsHomeComponent,
  ],
})
export class CampaignsModule {}
