import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { AuthComponent } from './auth.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: '', component: AuthComponent },
    ]),
  ],
  exports: [],
})
export class AuthModule {

}
