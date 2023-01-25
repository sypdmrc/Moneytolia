import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";
import { CampaignsHomeComponent } from "./campaigns-home/campaigns-home.component";
import { CampaignsComponent } from "./campaigns.component";
import { CreateComponent } from "./create/create.component";

const routes: Routes = [

  {
    path: '',
    component: CampaignsHomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: CampaignsComponent },
      { path: 'create', component: CreateComponent },
    ],
  },

]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class CampaignsRoutingModule {

}
