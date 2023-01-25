import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'campaigns', pathMatch: 'full' },
  { path: 'campaigns', loadChildren: () => import('./components/campaigns/campaigns.module').then(m => m.CampaignsModule) },
  { path: 'auth', loadChildren: () => import('./components/auth/auth.module').then(m => m.AuthModule) },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
